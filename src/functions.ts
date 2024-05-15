import { Observable } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket'; 


let socket: WebSocketSubject<any> | null = null; 


export function createConnection(deviceId: string): Observable<any> {
    console.log("Creating connection... with device id: ", deviceId);
    
    const dp = "wss://api.pay.cool/ws/paycool@"+ deviceId;
    
    return new Observable<any>((observer) => {
         socket = new WebSocketSubject(dp);
        
        socket.subscribe({
            next: (data: any) => {
                const result = JSON.stringify(data);
                observer.next(result); 
            },
            error: (error: any) => {
                observer.error(error); 
            },
            complete: () => {
                observer.complete(); 
            }
        });

    });
}



export function closeConnection(): void {

    console.log("Closing connection...");
    
    if (socket && !socket.closed) {
        socket.unsubscribe(); // Close the connection if it's active
    }
}

export function getWalletAddress(appName: string): void {
    send({ "source": appName+"-get", "data": appName });
}

export function send(data: any): void {
    if (socket && !socket.closed) {
        socket.next(data); 
    }
}

export function isConnected(): boolean {
    return socket !== null && !socket.closed; 
}

export function getSocket(): WebSocketSubject<any> | null {
    return socket; 
}



