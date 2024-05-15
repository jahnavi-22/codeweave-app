import { io } from  "socket.io-client";             //syntax to import module
                                                    //io is a function that takes url and options as arguments


export const initSocket = async() => {              //read documentation of socket.io-client again
    const options = {
        transports: ["websocket"],
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000
    };

//https://codeweave-app.onrender.com
//http://localhost:5000

    return io("https://codeweave-app.onrender.com", options);            //backend url of react app
}