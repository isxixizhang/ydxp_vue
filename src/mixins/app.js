export default {
    methods: {
        closePage() {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.indexOf("android") > -1 || ua.indexOf("linux") > -1) {
                //安卓手机
                window.android.pageFinish()
            } else if (ua.indexOf("iphone") > -1) {
                //苹果手机
                window.webkit.messageHandlers.pageFinish.postMessage('ios');
            } else {
                return false;
            }
        },
    }
}
