import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: '4nBBZzzwyOBruUwlL2nv28tUS1tM2zOW',
    socket: {
        host: 'redis-19018.c301.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 19018
    }
});

client.on('error', err => console.log('Redis Client Error', err));

if(!client.isOpen){
    await client.connect();
}


export { client };
