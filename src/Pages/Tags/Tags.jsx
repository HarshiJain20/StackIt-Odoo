import React from 'react';

const tags = [
  {
    name: 'javascript',
    description: 'For questions regarding JavaScript and its various dialects (like ActionScript).',
  },
  {
    name: 'python',
    description: 'Python is a multi-paradigm, dynamically typed, multipurpose language known for clean syntax.',
  },
  {
    name: 'c#',
    description: 'C# is a statically typed, object-oriented language developed by Microsoft.',
  },
  {
    name: 'java',
    description: 'Java is a high-level object-oriented language. Use this tag for Java-related questions.',
  },
  {
    name: 'php',
    description: 'PHP is an open-source scripting language especially suited for web development.',
  },
  {
    name: 'html',
    description: 'HTML is the standard markup language for creating web pages and applications.',
  },
  {
    name: 'android',
    description: "Android is Google's OS used for smartphones, tablets, and other digital devices.",
  },
  {
    name: 'css',
    description: 'CSS is a style sheet language for designing the layout and appearance of web documents.',
  },
  {
    name: 'react',
    description: 'React is a JavaScript library for building user interfaces maintained by Facebook.',
  },
  {
    name: 'node.js',
    description: 'Node.js is a runtime for executing JavaScript server-side.',
  },
  {
    name: 'express',
    description: 'Express is a fast, minimalist web framework for Node.js.',
  },
  {
    name: 'mongodb',
    description: 'MongoDB is a NoSQL database that stores data in JSON-like documents.',
  },
  {
    name: 'sql',
    description: 'Structured Query Language (SQL) is used for managing relational databases.',
  },
  {
    name: 'bootstrap',
    description: 'Bootstrap is a CSS framework for developing responsive web pages quickly.',
  },
  {
    name: 'tailwindcss',
    description: 'Tailwind CSS is a utility-first CSS framework for rapid UI development.',
  },
  {
    name: 'next.js',
    description: 'Next.js is a React framework for production-ready apps with SSR and routing.',
  },
  {
    name: 'vue.js',
    description: 'Vue.js is a progressive JavaScript framework for building UIs and SPAs.',
  },
  {
    name: 'angular',
    description: 'Angular is a platform and framework for building single-page client applications.',
  },
  {
    name: 'redux',
    description: 'Redux is a state management library often used with React.',
  },
  {
    name: 'firebase',
    description: 'Firebase provides backend services such as authentication, database, and hosting.',
  },
  {
    name: 'graphql',
    description: 'GraphQL is a query language for your API, developed by Facebook.',
  },
  {
    name: 'webpack',
    description: 'Webpack is a module bundler primarily for JavaScript used in modern web development.',
  },
  {
    name: 'sass',
    description: 'Sass is a CSS preprocessor that adds power and elegance to the basic language.',
  },
  {
    name: 'material-ui',
    description: "Material-UI is a popular React UI framework implementing Google's Material Design.",
  },
  {
    name: 'jquery',
    description: 'jQuery is a JavaScript library that simplifies DOM manipulation and AJAX calls.',
  },
  {
    name: 'typescript',
    description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
  },
  {
    name: 'docker',
    description: 'Docker is a tool designed to make it easier to create, deploy, and run applications using containers.',
  },
  {
    name: 'rest-api',
    description: 'REST APIs are a way of building web services that conform to REST architectural principles.',
  },
];

const Tags = () => {
  return (
    <div className="ml-44 max-w-6xl px-4 pt-16 pb-12 font-[Jost]">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Tags</h1>
      <p className="text-gray-600 mb-8">
        A tag is a keyword or label that categorizes your question with other, similar questions.
        Using the right tags makes it easier for others to find and answer your question.
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded mb-2">
              {tag.name}
            </div>
            <p className="text-gray-700 text-sm">{tag.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
