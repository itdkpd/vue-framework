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
                    <!-- <div class="social-links">
                        <a :href="artist.instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a :href="artist.twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a :href="artist.website" target="_blank" rel="noopener noreferrer">Website</a>
                    </div> -->
                    <div class="book">
                        <button class="book-button"><a :href="`/book?artist=${artist.name}`" class="book-link">Book Now</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const artists = [
    {
        name: "Arvin",
        bio: "@ogfliptats—Arvin goes from barbering to tattooing, making him your go-to for fresh cuts and custom ink! Want to see his style? Check out his barber portfolio at @flipbarber and tattoo portfolio at @ogfliptats. Book with Arvin and experience why everyone’s coming to OG for their next look!",
        image: "/vue-framework/src/assets/images/artist/original2copy.jpeg",
        instagram: "https://instagram.com/artistone",
        twitter: "https://twitter.com/artistone",
        website: "https://artistone.com",
    },
    {
        name: "Raven",
        bio: "Spotlight on @raven.tatts—OG’s expert in Linework and Blackwork ink. If you want crisp lines or bold black designs, Raven brings serious skill to every piece she creates. Want to see more of her portfolio? Check out @raven.tatts on Instagram for her latest work and fresh inspiration. Ready to go bold? Book your slot and rock your vision in ink!",
        image: "/vue-framework/src/assets/images/artist/originalcopy.jpeg",
        instagram: "https://instagram.com/artisttwo",
        twitter: "https://twitter.com/artisttwo",
        website: "https://artisttwo.com",
    },
    {
        name: "Vern",
        bio: "Meet @dcvern—OG’s master of microrealism, surrealism, fine lines, and conceptual tattooing. From clean, delicate detail to wild, bold imagination, Vern’s work always hits different. Every piece is a blend of precision and originality—no two tattoos ever the same. Curious about his latest creations? Head to his Instagram page @dcvern for a full portfolio and behind-the-scenes.",
        image: "/vue-framework/src/assets/images/artist/original3copy.jpeg",
        instagram: "https://instagram.com/artistthree",
        twitter: "https://twitter.com/artistthree",
        website: "https://artistthree.com",
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
    background: #000000;
    border-radius: 12px;
    color: white;
    max-width: 300px;
    flex: 1 1 300px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
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
        color: #fff;
        font-family: Playfair Display, serif;
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
    border-bottom: 3px solid #4444445d;
    border-radius: 12px 12px 0 0;
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
    font-family: playfair display, serif;
}

.artist-bio {
    font-size: 0.9rem;
    color: #e9e8e8;
    margin-bottom: 1rem;
    text-align: justify;
    font-family: Libre Franklin;
    font-weight: 500;
}

.social-links {
    display: flex;
    gap: 1rem;

    a {
        color: #1da1f2;
        /* Twitter blue for example */
        text-decoration: none;
        font-weight: 600;
        transition: color 0.2s ease;

        &:hover {
            color: #0d8ddb;
        }
    }
}

.book-button {
    background-color: #bda660;
    border: none;
    border-radius: 8px;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.book-link {
    color: #1a1a1a;
    font-weight: 700;
}

/* Responsive */
@media (max-width: 768px) {
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

    .title h1{
        font-size: 1.5rem;
    }
}
</style>
