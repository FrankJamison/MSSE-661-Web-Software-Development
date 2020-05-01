const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg4MTAwNzAxLCJleHAiOjE1ODgxODcxMDF9.siCZ2AcOds7ljOZU_uPvUaPVRJ5wDjiYkqlIyX48_DE";

chai.use(chaiHttp);

describe('Tasks API Service', function () {
  it('should GET all tasks', function (done) {
    chai
      .request('http://localhost:3000')
      .get('/api/tasks')
      .set('Authorization', `Bearer ${token}`)
      .end(function (err, resp) {
        expect(resp.status).to.be.eql(200);
        expect(resp.body).to.be.a('array');
        expect(resp.body.length).to.not.be.eql(0);
        done();
      });
  });

  it('should GET a single task', function (done) {
    const expected = [{
      id: 1,
      name: "This is the first task!",
      created_date: '2020-04-28T19:13:47.000Z',
      status: 'pending',
    }, ];

    chai
      .request('http://localhost:3000')
      .get('/api/tasks/1')
      .set('Authorization', `Bearer ${token}`)
      .end(function (err, resp) {
        expect(resp.status).to.be.eql(200);
        expect(resp.body).to.be.a('array');
        expect(resp.body.length).to.not.be.eql(0);
        expect(resp.body).to.be.eql(expected);
        done();
      });
  });

  //   it.skip('should POST a single task', function (done) {
  //     const newTask = {
  //       name: 'New test task!',
  //     };
  //     const expected = {
  //       message: 'Add task successfully!'
  //     };

  //     chai
  //       .request('http://localhost:3000')
  //       .post('/api/tasks')
  //       .send(newTask)
  //       .end(function (err, resp) {
  //         expect(resp.status).to.be.eql(200);
  //         expect(resp.body).to.be.eql(expected);
  //         done();
  //       });
  //   });
});