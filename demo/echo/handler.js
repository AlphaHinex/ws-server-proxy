'use strict';

var handler = module.exports = {};

handler.service = {
    // service name
    EchoServiceEndpointService: {
        // port name
        EchoServiceEndpointPort: {
            // opertaion name
            echo: function(args) {
                console.log('args: ' + args);
                // return {
                //     name: 'echo from ws proxy server with ' + args
                // };
                return 'echo from ws proxy server with ' + args;
            }
        }
    }
};
