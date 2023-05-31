import * as amqp from 'amqplib';

async function connectToRabbitMQ() {
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

    



    // Consumir mensajes de la cola
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

// Llamar a la función para conectarse a RabbitMQ
connectToRabbitMQ();
