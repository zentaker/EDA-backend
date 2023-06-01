import * as amqp from 'amqplib';
import { Booking } from '../../DomainLayer/booking/Booking';

export async function sendMessageToQueue(booking: string) {
  const bookingm = booking;

    try {

            // Conectar a CloudAMQP
    const connection = await amqp.connect('amqps://kcutczsz:kesNHxIyaLWTJz5SJN82HG5wiswraCgZ@prawn.rmq.cloudamqp.com/kcutczsz');
  
      // Crear un canal
      const channel = await connection.createChannel();
  
      // Definir la cola y las opciones
      const queueName = 'email.notification';
      const queueOptions = { durable: true };
  
      // Asegurarse de que la cola exista
      await channel.assertQueue(queueName, queueOptions);
  
      // Mensaje a enviar
      const message = 'orden'+booking;
  
      // Publicar el mensaje en la cola
      channel.sendToQueue(queueName, Buffer.from(message));
  
      console.log('Mensaje enviado a la cola:', message);
  
      // Cerrar la conexión después de enviar el mensaje
      await channel.close();
      await connection.close();
    } catch (error) {
      console.error('Error al enviar el mensaje a la cola:', error);
    }
  }
  
  // Llamar a la función para enviar el mensaje a la cola
  
  