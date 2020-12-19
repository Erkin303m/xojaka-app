import Toast from 'react-native-root-toast';


function show (message = "Network error") {
    // Add a Toast on screen.
    let toast = Toast.show(message, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        onShow: () => {
            // calls on toast\`s appear animation start
        },
        onShown: () => {
            // calls on toast\`s appear animation end.
        },
        onHide: () => {
            // calls on toast\`s hide animation start.
        },
        onHidden: () => {
            // calls on toast\`s hide animation end.
        }
    });
    // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
    setTimeout(function () {
        Toast.hide(toast);
    }, 3000);
}
export default {
    show
}
