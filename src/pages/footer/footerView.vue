<template>
    <footer class="site-footer">
        <div class="footer-container">
            <!-- Brand -->
            <div class="footer-brand">
                <img src="@/assets/images/OGLogo.png" alt="Logo" />
                <p>
                    Premium tattoo services and aftercare products.
                    Crafted with passion and precision.
                </p>
            </div>

            <!-- Links -->
            <div class="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">Book</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact">After Care Products</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact">More</RouterLink>
                    </li>
                </ul>
            </div>

            <!-- Contact -->
            <div class="footer-contact">
                <h4>Contact</h4>
                <p>Email: info@yourstudio.com</p>
                <p>Phone: +63 900 000 0000</p>
                <div class="socials">
                    <a href="#">FB</a>
                    <a href="#">IG</a>
                    <a href="#">TT</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            © {{ new Date().getFullYear() }} Your Tattoo Studio. All rights reserved.
        </div>
    </footer>
</template>
<style scoped lang="scss">
.site-footer {
    background: #0b0b0b;
    color: #ccc;
    padding: 4rem 1.5rem 1.5rem;

    a {
        color: #ccc;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: #fff;
        }
    }
}

.footer-container {
    max-width: 75rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 2.5rem;
}

.footer-brand img {
    max-width: 12rem;
    margin-bottom: 1rem;
}

.footer-brand p {
    font-size: 0.95rem;
    line-height: 1.6;
}

.footer-links h4,
.footer-contact h4 {
    margin-bottom: 1rem;
    color: #fff;
}

.footer-links ul {
    list-style: none;
    padding: 0;

    li {
        margin-bottom: 0.6rem;
    }
}

.footer-contact p {
    font-size: 0.95rem;
    margin-bottom: 0.4rem;
}

.socials {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    a {
        font-weight: 600;
        border: 1px solid #444;
        padding: 0.4rem 0.7rem;
        border-radius: 0.3rem;

        &:hover {
            border-color: #fff;
        }
    }
}

.footer-bottom {
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid #222;
    text-align: center;
    font-size: 0.85rem;
    color: #888;
}

/* 📱 Responsive */
@media (max-width: 768px) {
    .footer-container {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .socials {
        justify-content: center;
    }
}
</style>
