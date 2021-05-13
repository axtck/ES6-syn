const today = new Date(Date.parse("2021-05-13")); // set today
const numDay = today.getDate();

const twoDaysAgo = new Date();
twoDaysAgo.setDate(numDay - 2); // set 2 days ago from today

const twelveDaysAgo = new Date();
twelveDaysAgo.setDate(numDay - 12); // set 12 days ago from today

const visits = [{
    location: "Paris",
    date: today
},
{
    location: "Berlin",
    date: twoDaysAgo
},
{
    location: "Brussels",
    date: twoDaysAgo
},
{
    location: "Rome",
    date: twelveDaysAgo
}
];

// filtering occurences of dates in specific week
const start = new Date();
start.setDate(today.getDate() - today.getDay());

const result = [1, 2, 3, 4, 5, 6, 7].reduce((acc, d) => {
    const date = new Date();
    date.setDate(start.getDate() + d);

    const day = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(date).toLowerCase();
    const records = visits.filter(v => v.date.getYear() == date.getYear() && v.date.getMonth() == date.getMonth() && v.date.getDate() == date.getDate());
    acc[day] = records.length
        ? {
            numVisits: records.length,
            locations: records.map(r => r.location)
        }
        : { numVisits: 0 };
    return acc;
}, {});

console.log(result);
