let express = require('express');
let morgan = require('morgan');
let cors = require('cors');
let app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

let persons = [
  { name: 'Hamish Boodhoo', number: '040-123456', id: 0 },
  { name: 'Ada Lovelace', number: '39-44-5323523', id: 1 },
  { name: 'Dan Abramov', number: '12-43-234345', id: 2 },
  { name: 'John Rambo', number: '39-23-6423122', id: 3 },
];

app.get('/api/persons', (req, res) => {
  res.send(persons);
  console.log(persons);
});

let generateID = () => {
  return Math.floor(Math.random() * 10000) + 1;
};

app.post('/api/persons/', (req, res) => {
  let body = req.body;
  newPerson = body;
  newPerson.id = generateID();
  persons = persons.concat(newPerson);
  res.send(newPerson);
});

app.put('/api/persons/:id', (req, res) => {
  let id = Number(req.params.id);
  let newPerson = req.body;
  persons = persons.map((person) => (person.id === id ? newPerson : person));
  res.send(newPerson);
});

app.delete('/api/persons/:id', (req, res) => {
  let id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);
  res.send('deleted');
});
