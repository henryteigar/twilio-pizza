# Twilio-pizza

##### Twilio-pizza is a Node application that recommends pizzas from a built-in database, based on the user's preferences.

For input, Twilio-pizza uses natural language SMS messages. It then uses a custom-built NLP module to extract basic structured information from the input, returning ``required`` ingredients and ``banned`` ingredients. Based on those, the ``pizza`` module finds and returns a list of pizzas matching the criterion. A reply is sent via SMS with the name of a suitable pizza. If there's more than one pizza matching the user's criterion, one of those is selected at random.

The program consists of 4 components:

* ``pizza.js`` is the module that returns an array of suitable pizzas, based on ``requiredIngredients`` and ``bannedIngredients``.
* ``nlp.js`` is the natural language processing module that uses basic rules and regular expressions to extract meaning from the input.
* ``app.js`` acts as the HTTP endpoint for incoming SMS messages. It also coordinates between the ``nlp`` and ``pizza`` modules. The ``app`` module is also responsible for sending out the reply SMS.
* ``list.js`` contains an array of object literals that describe different pizzas from [Pappa Pizza](http://www.pappapizza.ee/menuu/tallinn/).

## Requirements

* An Internet-accessible web server with Node.js installed
* A Twilio account with a phone number whose callback is set up to point to that server (by default, port 3000 with the route /incoming)

## Usage

### Setup
* Install the required dependencies: ``npm i``
* Configure your environment using the ``.env`` file. You can use ``.example.env`` as an example.

### Running the code
* Running ``node app.js`` should start the server at the port specified in your ``.env`` configuration file.

### SMS input

The application expects a fairly structured input, despite its language processing efforts. Here's the most basic example.


``"Pizza with bacon, without jalapeno" ``

It uses the keywords ``with`` and ``without`` to understand what you're talking about (but if you don't want any specific required and/or banned ingredients, you can just omit those parts of the input (meaning you can just mention that you don't want onions no matter what, for example)). The above example string's ``nlp`` module output would return the following object:
``{ required: ['bacon'], banned: ['jalapeno'] }``.

You can also use ``with`` and ``without`` several times. For example, the following (more complex) input string will also be correctly interpreted: ``"Pizza with anchovies and bacon but without blue cheese. With bbq sauce!!!"``.

Case doesn't matter (all ingredients in the database are lowercase, so input is converted to lowercase) and neither does what you use to separate items in your input. ``"and"``, ``"or"``, ``"but"``, ``","``, ``"."`` and ``";"`` all carry the same meaning for the program. This approach actually works surprisingly well. The program isn't amazing at ignoring random words of excitement.
