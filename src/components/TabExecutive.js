import React from 'react';
import Card from 'react-bootstrap/Card';

export default function TabExecutive(){
  const execu = {
    "executive": [
      {
        "age": 69,
        "compensation": 557922,
        "currency": "USD",
        "name": "Dr. Arthur Levinson",
        "position": "Independent Chairman of the Board",
        "sex": "male",
        "since": "2011"
      },
      {
        "age": 59,
        "compensation": 11555466,
        "currency": "USD",
        "name": "Mr. Timothy Cook",
        "position": "Chief Executive Officer, Director",
        "sex": "male",
        "since": "2011"
      }
    ]
  }
  return(
    <div>
      {
        execu.executive.map((per,idx)=>(
          <Card key={idx}>
            <Card.Body>
              <Card.Title>{per.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {per.age} {per.sex} 입사:{per.since}
              </Card.Subtitle>
              <Card.Text>
                직책: {per.position}
              </Card.Text>
              <Card.Text>
                임금: {per.compensation}
              </Card.Text>
              <Card.Text>
                통화: {per.currency}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      }
    </div>
  );
}