<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center pt-4 id-card"
  >
    <b-img
      class="pokemon-photo-about"
      src="../assets/img/squirtle.png"
      alt="image of squirtle jumping of happiness"
    />
    <b-card class="about-card">
      <p>
        Reference:
        <a href="https://pokeapi.co/about">https://pokeapi.co/about</a>
      </p>
      <b-card-text>
        <h4>What is this?</h4>
        <p>
          This website provides a RESTful API interface to highly detailed
          objects built from thousands of lines of data related to
          <a href="https://en.wikipedia.org/wiki/Pokemon">Pokémon</a>. We
          specifically cover the video game franchise. Using this website, you
          can consume information on Pokémon, their moves, abilities, types, egg
          groups and much, much more.
        </p>
        <hr />
        <h4>What is an API?</h4>
        <p>
          An API (Application Programming Interface) is a contract that allow
          developers to interact with an application through a set of
          interfaces. In this case, the application is a database of thousands
          of Pokémon-related objects, and the interfaces are URL links.
        </p>
        <p>
          A RESTful API is an API that conforms to a set of loose conventions
          based on HTTP verbs, errors, and hyperlinks.
        </p>
      </b-card-text>
    </b-card>
  </div>
</template>
