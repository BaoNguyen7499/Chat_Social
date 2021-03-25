import passport from "passport";
import passportFacebook from "passport-facebook";
import userModel from "./../../model/userModel";
import { transErrors, transSuccess } from "./../../../lang/vi";

let FacebookStrategy = passportFacebook.Strategy;

// valid user account type : Facebook

let initPassportFacebook = () => {
    passport.use(new FacebookStrategy({
        clientID: 2678558672364860,
        clientSecret: '646feb979d7c7ecc44bb2fc4d47eee91',
        callbackURL: "http://localhost:3300/auth/facebook/callback",
        passReqToCallback: true,
        profileFields: ["email", "gender", "displayName"]
    }, async(req, accessToken, refreshToken, profile, done) => {
        try {
            let user = await userModel.findByFacebookUid(profile.id);
            if (user) {
                return done(null, user, req.flash("success", transSuccess.loginSuccess(user.username)));
            }
            let newUserItem = {
                username: profile.displayName,
                gender: profile.gender,
                local: { isActive: true },
                facebook: {
                    uid: profile.id,
                    token: accessToken,
                    email: profile.emails[0].value,
                }
            };
            let newUser = userModel.createNew(newUserItem);
            return done(null, newUser, req.flash("success", transSuccess.loginSuccess(newUser.username)));

        } catch (error) {
            console.log(error);
            return done(null, false, req.flash("error", transErrors.server_error));
        }
    }));

    // save userid to session
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    passport.deserializeUser((id, done) => {
        userModel.findUserById(id)
            .then(user => {
                return done(null, user);
            })
            .catch(error => {
                return done(error, null);
            });
    });
};

module.exports = initPassportFacebook;