
import { EUSocket, SocketAdapter } from './adapter';


//Adapter
const euSocket = new EUSocket();
const socketAdapter = new SocketAdapter(euSocket);

socketAdapter.gainEnergy();