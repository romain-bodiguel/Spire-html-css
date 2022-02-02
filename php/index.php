<?php include('templates/header.php'); ?>
    
    <main>
        <section class="find-station">
            <div class="find-station__div">
            <button class="button button-big"><a href="#" class="find-station__link">Trouver votre station</a></button>
            </div>
            <a href="#comment-ça-marche" ><img class="find-station__row--image" src="../sources/images/cercle-fleche-complet.png" alt="Flèche Spire"></a>
        </section>

        <section class="how-it-works" id="comment-ça-marche">
            <h1>Comment ça marche ?</h1>
        </section>

        <section class="what-is-spire">
            <h1>Spire, c'est quoi ?</h1>
            <p>
                <strong>Spire</strong>, c’est une plateforme qui permet de rechercher la station qui vous correspond de façon ludique et intuitive grâce à des critères pertinents que <strong>vous choisissez</strong>.
            </p>

            <p>
                <strong>Immergez-vous</strong> complètement dans l’univers, l’ambiance et l’écosystème de chaque station grâce à leur page ! Ainsi, vous ne ferez plus jamais le mauvais choix.
            </p>

            <p>
                <strong>Découvrez</strong> dès maintenant toutes nos stations en navigant sur notre carte interactive !
            </p>
            <button class="button button-small"><a href="#">C'est parti !</a></button>
        </section>
            
        <section class="mid-image">
            <img class="mid-image__background" src="../sources/images/adventure-cold-country-background.png" alt="Skieur dans la poudreuse">
        </section>

        <section class="our-commitment">
            <h1>Notre engagement durable</h1>
            <p>
                Sensibles à la cause écologique et au réchauffement climatique qui menace directement nos montagnes, nous avons choisi de donner à Spire un <strong>engagement durable</strong>.
            </p>

            <p>
                Pour cela, nous avons choisi de supporter l'association  <strong>Mountain Riders</strong>, qui organise notamment des ramassages de déchets en montagne ainsi que des opérations de sensibilisation.
            </p>
            <button class="button button-small"><a href="#">Voir plus</a></button>
        </section>

        <section class="newsletter">
            <h1>Inscrivez-vous à la newsletter</h1>
            <div>
                <input type="checkbox" id="newsletter" name="newsletter">
                <label for="newsletter">Je suis d'accord pour recevoir les informations de Spire</label>
            </div>
            <input type="email" id="email" placeholder="Entrez votre adresse mail" required>
            <button class="newsletter__button" type="button">S'inscrire<img src="../sources/images/icon-newsletter.svg"></button>
        </section>
    </main>
    
<?php include('templates/footer.php'); ?>