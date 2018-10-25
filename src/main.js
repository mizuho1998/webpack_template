import Peer from 'skyway-js';

var localStream = null;
var peer = null;
var existingCall = null;

navigator.getUserMedia =    navigator.getUserMedia       ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia;

window.URL = window.URL || window.webkitURL;

// get video and audio
navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(function (stream) {       // success
        
        $('#my-video').get(0).srcObject = stream; // set video to html
        localStream = stream;

    }).catch(function (error) {     // fault 
        
        console.error('mediaDevice.getUserMedia() error:', error);
        return;
});

peer = new Peer({
    key: 'api_key',
    debug: 3
});

// peer.on('open', function(){
//     $('#my-id').text(peer.id);
// });

// peer.on('error', function(err){
//     alert(err.message);
// });
// peer.on('close', function(){
// });

// peer.on('disconnected', function(){
// });
// $('#make-call').submit(function(e){
//     e.preventDefault();
//     const call = peer.call($('#callto-id').val(), localStream);
//     setupCallEventHandlers(call);
// });

// $('#end-call').click(function(){
//     existingCall.close();
// });

// peer.on('call', function(call){
//     call.answer(localStream);
//     setupCallEventHandlers(call);
// });

// function setupCallEventHandlers(call){
//     if (existingCall) {
//         existingCall.close();
//     };
//     existingCall = call;
//     call.on('stream', function(stream){
//         addVideo(call,stream);
//         setupEndCallUI();
//         $('#their-id').text(call.remoteId);
//     });
//     call.on('close', function(){
//         removeVideo(call.remoteId);
//         setupMakeCallUI();
//     });
// }

// function addVideo(call,stream){
//     $('#their-video').get(0).srcObject = stream;
// }

// function removeVideo(peerId){
//     $('#'+peerId).remove();
// }

// function setupMakeCallUI(){
//     $('#make-call').show();
//     $('#end-call').hide();
// }

// function setupEndCallUI() {
//     $('#make-call').hide();
//     $('#end-call').show();
// }


console.log("test");