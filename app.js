function StartMeeting() {
    const domain = '175.41.184.121';
    const container = document.querySelector('#jitsi-meet-conf-container');
    const loadingIndicator = document.createElement('div');
    loadingIndicator.textContent = 'Loading...';
    container.appendChild(loadingIndicator);

    const roomName = 'FanCom.' + Math.random().toString(36).substring(7);
    const options = {
        roomName: roomName,
        width: 700,
        height: 600,
        parentNode: container,
        userInfo: {
            displayName: 'shahrukh pathan',
            email: 'pathan01k@gmail.com',
            avatar: 'https://drive.google.com/file/d/12JtooMQJky52RR4hK1Pw_9LgbeE60FXE/view?usp=sharing'
        },
    };

    let apiObj; 

    try {
        apiObj = new JitsiMeetExternalAPI(domain, options);
    } catch (error) {
        console.error('Error starting the meeting:', error);
        loadingIndicator.textContent = 'Failed to start the meeting. Please try again.';
    } finally {
        // Remove the loading indicator
        container.removeChild(loadingIndicator);
    }
}
