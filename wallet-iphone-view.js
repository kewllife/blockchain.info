$(document).ready(function() {
    setTimeout(function() {
        loadScript('wallet/account.min.js', function() {
            AccountSettings.bind();
        }, function (e) {
            MyWallet.makeNotice('error', 'misc-error', e);
        });

    }, 500);
});