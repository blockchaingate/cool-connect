// import { Subject } from "rxjs";
// import { WebSocketSubject } from "rxjs/webSocket";

// export class SocketService {
// isSocketActive: boolean = false;
//   txHashes: any = [];
//   socket: any;
//   accountSubject = new Subject<string>();

//     constructor() {
//         console.log("SocketService constructor");
//     }

//     public connectSocket(deviceId: string): any {

//     console.log("Creating connection... with device id: ", deviceId);
        
//        var dp = "wss://testapi.fundark.com/ws/paycool@D72D205F-43E4-41E2-8412-60E13ACF8A03";
//           this.isSocketActive = true;
//           this.socket = new WebSocketSubject(dp);
//           this.socket.subscribe((data: any) => {
//             var result = JSON.stringify(data);
//             console.log("SocketService result ============>: ", result);
//             return result
//           });
        
//       }
// }