Notes on technical challenge and interview

Preparation:
- strong knowledge of the underlying language logic, structure, syntax, indentation and conventions 
- learn logic and problem-solving not packages and methods
- it's ok to ask for help with packages and setup, but the basics of the language are a must-know
- know how to set up a development environment (rails new if ROR, webpack if JS) and a versioning tool like GitHub

Practice problems that are relevant to the jobs you are applying for. For example if you are applying to front end jobs then focus on at least one Front End framework like React then everything FE related like AJAX, REST API, DOM manipulation...

In a live interview:
- talk out loud when you solve the problem, it shows what is your thinking process, and it also takes away the tension created by awkward silence
- it's ok to ask questions if you hit a wall

LINKS USED IN THE CHALLENGE:
- Webpack setup https://webpack.js.org/guides/getting-started/
- Webpack server setup and config https://github.com/webpack/webpack-dev-server, https://webpack.js.org/configuration/dev-server/
- Boostrap https://www.bootstrapcdn.com/legacy/bootstrap/

===============

CHALLENGE: 

Instructions

We want you to create a DonutChartCard component. Use a public git repository (e.g.
Github or GitLab)

Specifications

The DonutChartCard component should look like the image above.
When the application starts, it will perform an ajax request to retrieve a JSON object
(provided below) that will be utilized to generate a list of widgets all looking the same but
showing different data.

Each widget will have:
● A title
● A Donut chart showing in the middle the total and the label
● a Legend of the represented items
● a menu button (top-right) that will contain the action item Clone.

When the clone button is clicked, the current card widget will be duplicated and added at the
end of the list. When the card is duplicated, the menu icon should disappear from the original
one. This means only 1 clone per card is allowed.

Requirements
● use React or Vue (Vue is preferred since our current project is built with it)
● use UI framework of your choice or build the card from scratch
● use Apexcharts to create the chart (this will also make your life much easier)
https://apexcharts.com/
● (bonus) provide unit test coverage

JSON
Use the json below to mock the response of your ajax request, to provide data to your donut
chart.
https://gitlab.com/-/snippets/2149167/raw/main/data.json (you might need to host this
yourself due to limitations of cross origin requests)