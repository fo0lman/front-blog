define([
    'firebase',
    'modules/alert'
], function (fb, Alert) {
    "use strict";

    var rootRef;
    rootRef = new Firebase("https://fincontrol.firebaseio.com");

    function registerUser(email, password) {
        rootRef.createUser({
            email: email,
            password: password
        }, function(error, userData) {
            if (error) {
                new Alert({
                    type: 'alert',
                    text: 'Error creating user: ' + error
                });
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
                AuthenticateUserEmail(email, password);
            }
        });
    }

    function AuthenticateUserEmail(email, password, remember) {
        var remember = remember || false;
        var rememberMe;
        rememberMe = (remember) ? 'default' : 'sessionOnly';
        rootRef.authWithPassword({
            email: email,
            password: password
        }, function(error, authData) {
            if (error) {
                new Alert({
                    type: 'alert',
                    text: 'Login Failed! ' + error
                });
            } else {
                console.log("Authenticated successfully with payload:", authData);
                router.navigate('dashboard', true);
            }
        }, {
            remember: rememberMe
        });
    }

    function resetUserPassword(email) {
        rootRef.resetPassword({
            email: email
        }, function(error) {
            if (error === null) {
                new Alert({
                    type: 'ok',
                    text: 'Password reset email sent successfully. Check your E-mail.'
                });
                console.log("Password reset email sent successfully");
            } else {
                new Alert({
                    type: 'alert',
                    text: 'Error sending password reset email: ' + error
                });
                console.log("Error sending password reset email:", error);
            }
        });
    }

    function changeUserPassword(email, oldPassword, newPassword) {
        rootRef.changePassword({
            email: email,
            oldPassword: oldPassword,
            newPassword: newPassword
        }, function(error) {
            if (error === null) {
                new Alert({
                    type: 'ok',
                    text: 'Password changed successfully'
                });
            } else {
                new Alert({
                    type: 'alert',
                    text: 'Error changing password: ' + error
                });
                console.log("Error changing password:", error);
            }
        });
    }

    function AuthenticateUserSocial(provider) {
        var providerScope;
        if (provider === 'facebook') {
            providerScope = 'email,user_likes';
        } else if (provider === 'github') {
            providerScope = 'user,gist';
        } else if (provider === 'google') {
            providerScope = 'email';
        } else {
            providerScope = null;
        }

        rootRef.authWithOAuthPopup(provider, function(error, authData) {
            if (error) {
                new Alert({
                    type: 'alert',
                    text: 'Login Failed! ' + error
                });
            } else {
                console.log("Authenticated successfully with payload:", authData);
                router.navigate('dashboard', true);
            } }, {
            remember: 'default', //sessionOnly
            scope: providerScope
        });
    }

    function getUserAuthStatus() {
        var authData = rootRef.getAuth();
        return (authData) ? true : false;
    }

    function getUserData() {
        var authData = rootRef.getAuth();
        switch(authData.provider) {
            case 'password':
                return {
                    uid: authData.uid,
                    provider: authData.provider,
                    token: authData.token,
                    fullName: authData.password.email,
                    email: authData.password.email,
                    profileImageURL:authData.password.profileImageURL
                };
            case 'google':
                return {
                    uid: authData.uid,
                    provider: authData.provider,
                    token: authData.token,
                    fullName: authData.google.displayName,
                    email: authData.google.email,
                    google_id: authData.google.id,
                    profileImageURL: authData.google.profileImageURL,
                    gender: authData.google.cachedUserProfile.gender,
                    first_name: authData.google.cachedUserProfile.given_name,
                    last_name: authData.google.cachedUserProfile.family_name,
                    link: authData.google.cachedUserProfile.link
                };
            case 'twitter':
                return {
                    uid: authData.uid,
                    provider: authData.provider,
                    token: authData.token,
                    fullName: authData.twitter.displayName,
                    twitter_id: authData.twitter.id,
                    profileImageURL: authData.twitter.profileImageURL,
                    username: authData.twitter.username
                };
            case 'facebook':
                return {
                    uid: authData.uid,
                    provider: authData.provider,
                    token: authData.token,
                    fullName: authData.facebook.displayName,
                    email: authData.facebook.email,
                    facebook_id: authData.facebook.id,
                    profileImageURL: authData.facebook.profileImageURL,
                    gender: authData.facebook.cachedUserProfile.gender,
                    first_name: authData.facebook.cachedUserProfile.first_name,
                    last_name: authData.facebook.cachedUserProfile.last_name,
                    link: authData.facebook.cachedUserProfile.link
                };
            case 'github':
                return {
                    uid: authData.uid,
                    provider: authData.provider,
                    token: authData.token,
                    fullName: authData.github.displayName,
                    email: authData.github.email,
                    github_id: authData.github.id,
                    profileImageURL: authData.github.profileImageURL,
                    username: authData.github.username,
                    link: authData.github.cachedUserProfile.html_url
                };
        }
    }

    function logoutUser(callback) {
        rootRef.unauth(callback)
    }

    return {
        regUser: registerUser,
        authUserEmail: AuthenticateUserEmail,
        resetUserPass: resetUserPassword,
        changeUserPass: changeUserPassword,
        authUserSocial: AuthenticateUserSocial,
        getUserAuthStatus: getUserAuthStatus,
        getUserData: getUserData,
        logoutUser: logoutUser,
        rootRef: rootRef
    }
});