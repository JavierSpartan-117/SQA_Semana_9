import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    vus: 100, // 100 users looping during 30 seconds
    duration: '30s', // duration of the test is 30 seconds
};

export default function () {
    let res = http.get('http://localhost:3000/endpoint');
    // let res = http.get('http://localhost:3000/endpoint2');
    check(res, {'status was 200': (r) => r.status === 200});
    sleep(1);
}