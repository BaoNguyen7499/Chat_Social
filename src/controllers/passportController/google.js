import passport from "passport";
import passportGoogle from "passport-google-oauth";
import userModel from "./../../model/userModel";
import { transErrors, transSuccess } from "./../../../lang/vi";

let GoogleStrategy = passportGoogle.OAuth2Strategy;

// valid user account type : Google

let initPassportGoogle = () => {
    passport.use(new GoogleStrategy({
        clientID: '457259926969-uj9h79idq70d84j4l0sfogdhvapnr9nn.apps.googleusercontent.com',
        clientSecret: 'BVUKRwQPjx7tBreb8WINQHqN',
        callbackURL: "http://localhost:3300/auth/google/callback",
        passReqToCallback: true,
        profileFields: ["email", "gender", "displayName"]
    }, async(req, accessToken, refreshToken, profile, done) => {
        try {
            let user = await userModel.findByGoogleUid(profile.id);
            if (user) {
                return done(null, user, req.flash("success", transSuccess.loginSuccess(user.username)));
            }
            let newUserItem = {
                username: profile.displayName,
                gender: profile.gender,
                local: { isActive: true },
                google: {
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

module.exports = initPassportGoogle;