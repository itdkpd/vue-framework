<template>
  <div class="container">
    <div class="title">
      <h1>Meet Our Talented Artists</h1>
    </div>
    <div class="card-container">
      <div class="card" v-for="(artist, index) in artists" :key="index">
        <div class="image-section">
          <img :src="artist.image" :alt="artist.name" class="artist-image" />
        </div>
        <div class="info-section">
          <h2 class="artist-name">{{ artist.name }}</h2>
          <p class="artist-bio">{{ artist.bio }}</p>
          <div class="book">
            <button class="book-button">
              <a :href="`/book?artist=${artist.name}`" class="book-link">Book Now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const artists = [
  {
    name: 'Arvin',
    bio: '@ogfliptats—Arvin goes from barbering to tattooing, making him your go-to for fresh cuts and custom ink! Want to see his style? Check out his barber portfolio at @flipbarber and tattoo portfolio at @ogfliptats. Book with Arvin and experience why everyone’s coming to OG for their next look!',
    image: '/vue-framework/src/assets/images/artist/original2copy.jpeg',
  },
  {
    name: 'Raven',
    bio: 'Spotlight on @raven.tatts—OG’s expert in Linework and Blackwork ink. If you want crisp lines or bold black designs, Raven brings serious skill to every piece she creates. Want to see more of her portfolio? Check out @raven.tatts on Instagram for her latest work and fresh inspiration. Ready to go bold? Book your slot and rock your vision in ink!',
    image: '/vue-framework/src/assets/images/artist/originalcopy.jpeg',
  },
  {
    name: 'Vern',
    bio: 'Meet @dcvern—OG’s master of microrealism, surrealism, fine lines, and conceptual tattooing. From clean, delicate detail to wild, bold imagination, Vern’s work always hits different. Every piece is a blend of precision and originality—no two tattoos ever the same. Curious about his latest creations? Head to his Instagram page @dcvern for a full portfolio and behind-the-scenes.',
    image: '/vue-framework/src/assets/images/artist/original3copy.jpeg',
  },
]
</script>

<style scoped lang="scss">
// * {
//     border: 1px white solid;
// }

.container {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card-container {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background: var(--artist-bg-color);
  border-radius: 0.75rem;
  color: var(--white);
  max-width: 18.75rem;
  flex: 1 1 18.75rem;
  box-shadow: 0 0.25rem 0.625rem rgb(0 0 0 / 60%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.title {
  text-align: left;
  margin-bottom: 2rem;
  width: 60rem;

  h1 {
    font-size: 2rem;
    color: var(--white);
    font-family: 'Playfair Display', serif;
  }
}

.image-section {
  width: 100%;
  overflow: hidden;
}

.artist-image {
  width: 100%;
  height: auto;
  display: block;
  border-bottom: 0.1875rem solid var(--artist-image-border);
  border-radius: 0.75rem 0.75rem 0 0;
}

.info-section {
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.artist-name {
  margin: 0 0 0.5rem;
  font-size: 1.3rem;
  font-family: 'playfair display', serif;
}

.artist-bio {
  font-size: 0.9rem;
  color: var(--artist-bio-text);
  margin-bottom: 1rem;
  text-align: justify;
}

.book-button {
  background-color: var(--book-bg-color);
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.book-link {
  color: var(--book-text-color);
  font-weight: 700;
}

/* Responsive */
@media (width <= 768px) {
  .card-container {
    flex-direction: column;
    align-items: center;
    height: 1600px;
  }

  .card {
    max-width: 100%;
  }

  .artist-image {
    max-height: 350px;
    object-fit: cover;
    width: 100%;
  }

  .image-section {
    height: 100%;
  }

  .title h1 {
    font-size: 1.5rem;
  }
}
</style>
