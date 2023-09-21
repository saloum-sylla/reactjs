/*
https://v5.reactrouter.com/web/guides/quick-start

React Router est une bibliothèque de routage pour les applications React. 
Elle permet de gérer la navigation entre les différentes vues de votre application,
en offrant une expérience fluide et personnalisable pour les utilisateurs.
Pour commencer à utiliser React Router, vous devez installer la bibliothèque en utilisant la commande suivante :
    npm install react-router-dom
Une fois la bibliothèque installée, vous pouvez commencer à l'utiliser dans votre application. 

Voici un exemple de configuration de base :
    import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
    import Home from './components/Home';
    import About from './components/About';
    import Contact from './components/Contact';

    function App() {
        return (
            <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
            </Router>
        );
        }

    export default App;

Dans cet exemple, nous avons créé un Router qui enveloppe notre application. 
Nous avons également créé trois routes différentes pour les vues Home, About et Contact. 
Chaque route est associée à un composant spécifique.
Vous pouvez maintenant utiliser les composants de navigation fournis par React Router dans vos vues pour gérer la navigation entre elles.
Par exemple, vous pouvez utiliser le composant Link pour créer un lien qui navigue vers une autre vue :

    import { Link } from 'react-router-dom';
    function Home() {
    return (
        <div>
        <h1>Home</h1>
        <nav>
            <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            </ul>
        </nav>
        </div>
    );
    }

    export default Home;

Dans cet exemple, nous utilisons le composant Link pour créer des liens vers les vues About et Contact. 
Lorsque l'utilisateur clique sur l'un de ces liens, React Router gère automatiquement la navigation vers la vue correspondante.
C'est un exemple de base pour commencer à utiliser React Router dans vos applications React. 
La bibliothèque offre de nombreuses fonctionnalités avancées pour gérer la navigation, 
telles que la gestion des paramètres d'URL, la gestion des transitions d'écran, la gestion des erreurs de routage, etc. 
*/
