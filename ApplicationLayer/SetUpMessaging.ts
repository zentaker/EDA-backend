import * as amqp from 'amqplib';
import { Booking } from '../DomainLayer/booking/Booking';

export async function setupMessaging(booking: Booking | null) {
    try{
   // Conectar a CloudAMQP
   const connection = await amqp.connect('amqps://kcutczsz:kesNHxIyaLWTJz5SJN82HG5wiswraCgZ@prawn.rmq.cloudamqp.com/kcutczsz');

   // Crear un canal
   const channel = await connection.createChannel();

   // Definir la cola y las opciones
   const queueName = 'email.notification';
   const queueOptions = { durable: true };

   // Asegurarse de que la cola exista
   await channel.assertQueue(queueName, queueOptions);


 

  // 2. Iniciar el servicio de mensajería
  channel.consume(queueName, (message) => {
    if (message !== null) {
      // Procesar el mensaje
      console.log('Mensaje recibido:', message.content.toString());

      // Confirmar el mensaje recibido
      channel.ack(message);
    }
  });

  console.log('Conexión establecida y consumiendo mensajes...');
} catch (error) {
  console.error('Error al conectarse a RabbitMQ:', error);
}
}

  // 3. Establecer el servicio de mensajería en el BookingConfirmationRepo


