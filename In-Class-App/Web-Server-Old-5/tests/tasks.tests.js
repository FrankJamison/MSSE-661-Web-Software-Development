// const chai = require('chai');
// const expect = chai.expect;
// const chaiHttp = require('chai-http');

// chai.use(chaiHttp);

// describe('Tasks API Service', function () {

//     it('should POST a single task', function (done) {
//         const newTask = {
//             user_id: 1,
//             name: 'New Test Task!'
//         };
//         const expected = {
//             message: 'Number of records inserted: 1'
//         };

//         chai
//             .request('http://localhost:3000')
//             .post('/api/tasks')
//             .send(newTask)
//             .end(function (err, resp) {
//                 expect(resp.status).to.be.eql(200);
//                 expect(resp.body).to.be.eql(expected);
//                 done();
//             });
//     });

//     it('should DELETE a single task', function (done) {
//         const expected = {
//             message: 'Deleted successfully.'
//         };

//         chai
//             .request('http://localhost:3000')
//             .delete('/api/tasks/12') // Change this to the next available id
//             .end(function (err, resp) {
//                 expect(resp.status).to.be.eql(200);
//                 expect(resp.body).to.be.eql(expected);
//                 done();
//             });
//     });

//     it('should GET all tasks', function (done) {
//         chai
//             .request('http://localhost:3000')
//             .get('/api/tasks')
//             .end(function (err, resp) {
//                 expect(resp.status).to.be.eql(200);
//                 expect(resp.body).to.be.a('array');
//                 expect(resp.body.length).to.not.be.eql(0);
//                 done();
//             });
//     });

//     it('should UPDATE a single task', function (done) {
//         const updatedTask = {
//             name: "I'm the first task!",
//             status: 'completed'
//         };
//         const expected = {
//             message: 'Number of records updated: 1'
//         };

//         chai
//             .request('http://localhost:3000')
//             .put('/api/tasks/1')
//             .send(updatedTask)
//             .end(function (err, resp) {
//                 expect(resp.status).to.be.eql(200);
//                 expect(resp.body).to.be.eql(expected);
//                 done();
//             });
//     });

//     it('should GET a singe task', function (done) {
//         const expected = [{
//             id: 1,
//             user_id: 1,
//             name: "I'm the first task!",
//             created_date: '2020-04-12T01:53:19.000Z',
//             status: 'completed',
//         }, ];
//         chai
//             .request('http://localhost:3000')
//             .get('/api/tasks/1')
//             .end(function (err, resp) {
//                 expect(resp.status).to.be.eql(200);
//                 expect(resp.body).to.be.a('array');
//                 expect(resp.body.length).to.not.be.eql(0);
//                 expect(resp.body).to.be.eql(expected);
//                 done();
//             });
//     });


// });