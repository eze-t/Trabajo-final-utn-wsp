
const contact_data = [
    {
        contact_id: 1,
        contact_name: 'Andres',
        contact_avatar: 'https://media.diariouno.com.ar/p/ee1285d11374a7df12a0e81b1c70af59/adjuntos/298/imagenes/009/053/0009053507/1200x0/smart/messi-seleccion-3jpg.jpg',
        contact_unseen_messages: 5,
        last_message_content: 'estoy afuera',
        last_message_state: 'RECEIVED', /* 'NOT_SEND ' 'NOT_RECEIVED' 'RECEIVED' 'SEEN' */
        last_message_created_at: new Date()
    },
    {
        contact_id: 2,
        contact_name: 'Rodrigo',
        contact_avatar: 'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1202%2Fr1100645_1296x729_16%2D9.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg',
        contact_unseen_messages: 0,
        last_message_content: 'puedo ir?',
        last_message_state: 'SEEN',
        last_message_created_at: new Date()
    },
]

export default contact_data