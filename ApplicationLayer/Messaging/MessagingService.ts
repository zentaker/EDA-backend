import { Booking } from "../../DomainLayer/booking/Booking";
import * as amqp from 'amqplib';
import { MessagingException } from "./MessaginException";
export class MessagingService{
    private channel: any;
    private connection: any;
    private status: boolean;
    constructor(
        private readonly url: string,
        private readonly queueName: string,
        
      ) { 
        this.status = false;
      }

    async subscribe(booking: Booking) {
        if (this.status == false ) {
            return new MessagingException('El canal no esta abierto');
        }
        

    // Consumir mensajes de la cola
    this.channel.consume(this.queueName, (message: { toString: () => any; } | null) => {
        if (message !== null) {
          // Procesar el mensaje
          console.log('Mensaje recibido:', message.toString());
  
          // Confirmar el mensaje recibido
          this.channel.ack(message);
        }
      });
  
        
  

    }
    channelStatus(){
        return this.status
    }
    async start(){
        //si el canal ya esta abuerto retorna un mensaje
   
        if (this.status == true ) {
            throw new MessagingException('El canal ya esta abierto');
   
          }
        //si el canal no esta abierto se conecta a la cola
        try{
        this.connection = await amqp.connect(this.url);
        this.channel =  await this.connection.createChannel();
        await this.channel.assertQueue(this.queueName, { durable: true });

        console.log('Conexión establecida');
        this.status = true;

    }catch (error) {
        console.error('Error al conectarse a RabbitMQ:', error);
        throw error
      }

    }
    async stop(){
        try {
            await this.channel.close();
            await this.connection.close();
            this.status = false;
            console.log('Conexión finalizada...');
        } catch (error) {
            console.error('Error al cerrar:', error);
            
            
        }

    }
    async publish(message: string) {
        //si el canal esta abierto envia el mensaje
        if (this.status == true ) {
            try{
                this.channel.sendToQueue(this.queueName, Buffer.from(message));
                console.log('Mensaje enviado a la cola:', message);        
        }catch (error) {
            console.error('error al publicar: '+ error);
            throw error
          }
        }
    }
   
}