import React from 'react';
import Card from '../UI/Card';
import BookItem from './BooksItem/BookItem'

import classes from './BooksList.module.css';


const DUMMY_BOOKS = [
  {
    id: "z1",
    name: "Le monde s'effondre",
    author: "Chinua Achebe",
    price: 11.09,
    description:
      "Roman qui rend hommage à l'Afrique précoloniale à l'aube de sa décomposition. Dans le village ibo d'Umuofia (Nigeria), Okonkwo, fils d'un père lâche et oisif, est un fermier prospère, qui veille sur ses trois épouses et ses huit enfants. Il a gagné la confiance des anciens par sa sagesse. Mais les missionnaires, puis les colons britanniques vont bouleverser l'existence de tout son peuple.",
  },
  {
    id: "z2",
    name: "L'aleph",
    price: 11.99,
    author: "Jorge Luis Borges",
    description:
      "L'Aleph restera, je crois, comme le recueil de la maturité de Borges conteur. Ses récits précédents, le plus souvent, n'ont ni intrigue ni personnages. Ce sont des exposés quasi axiomatiques d'une situation abstraite qui, poussée à l'extrême en tout sens concevable, se révèle vertigineuse.Les nouvelles de L'Aleph sont moins roides, plus concrètes. Certaines touchent au roman policier, sans d'ailleurs en être plus humaines. Toutes comportent l'élément de symétrie fondamentale, où j'aperçois pour ma part le ressort ultime de l'art de Borges. Ainsi, dans L'Immortel : s'il existe quelque part une source dont l'eau procure l'immortalité, il en est nécessairement ailleurs une autre qui la reprend. Et ainsi de suite...Borges : inventeur du conte métaphysique. Je retournerai volontiers en sa faveur la définition qu'il a proposée de la théologie : une variété de la littérature fantastique. Ses contes, qui sont aussi des démonstrations, constituent aussi bien une problématique anxieuse des impasses de la théologie.",
  },
  {
    id: "z3",
    name: "L'étranger",
    price: 8.75,
    author: "Albert Camus",
    description:
      "Quand la sonnerie a encore retenti, que la porte du box s’est ouverte, c’est le silence de la salle qui est monté vers moi, le silence, et cette singulière sensation que j’ai eue lorsque j’ai constaté que le jeune journaliste avait détourné les yeux. Je n’ai pas regardé du côté de Marie. Je n’en ai pas eu le temps parce que le président m’a dit dans une forme bizarre que j’aurais la tête tranchée sur une place publique au nom du peuple français…",
  },
  {
    id: "z4",
    name: "Les frères Karamazov",
    price: 11.7,
    author: "Fiodor Dostoïevski",
    description:
      "Dmitri, Ivan et Alexeï, trois êtres que tout sépare, partagent un même père, et avec lui une honte indicible : honte de l'origine, de la naissance... Honte d'exister, qui précipite Dimitri dans l'alcool et les excès de son père et assigne Ivan à une résignation désabusée. Alors que la propagation de l'athéisme plonge le peuple russe dans un doute existentiel, Fiodor Pavlovich, le père de la fratrie, incarne ce désarroi d'une dévotion en souffrance d'idole. Condamné à une existence au second degré, il s'affirme comme une parodie de lui-même. La disparition de Dieu n'a balayé ni la peine ni la culpabilité, mais laissé insatiable la faim d'être pardonné : faute de rédemption, Fiodor mène l'existence dérisoire d'un bouffon et ne récolte que la haine de ses fils. Seul le cadet Alexeï ouvre, confiant, le chemin vers une existence vivable, en opposant au règne généralisé de la honte la ferveur de l'homme simple. Exprimant les craintes ineffables qui nous agitent, Dostoïevski trouve une ultime consolation dans la fièvre des mots échangés et l'ivresse dangereuse des aveux murmurés.",
  },
  {
    id: "z6",
    name: "Cent ans des solitude",
    price: 9.9,
    Author: "Gabriel Garcia Marquez",
    description:
      "Une épopée vaste et multiple, un mythe haut en couleur plein de rêve et de réel. Histoire à la fois minutieuse et délirante d'une dynastie: la fondation, par l'ancêtre, d'un village sud-américain isolé du reste du monde; les grandes heures marquées par la magie et l'alchimie; la décadence; le déluge et la mort des animaux. Ce roman proliférant, merveilleux et doré comme une enluminure, est à sa façon un Quichotte sud-américain: même sens de la parodie, même rage d'écrire, même fête cyclique des soleils et des mots.",
  },
  {
    id: "z7",
    name: "L'aveuglement",
    Author: "José Saramago",
    price: 10.9,
    description:
      "Se déclare une épidémie foudroyante de cécité. Les premières victimes sont mises en quarantaine sur une base gardée par l'armée mais, en l'absence de remède, la mesure prophylactique ne suffit pas : en l'espace de quelques mois, tout le pays est aveugle, à l'exception d'un des personnages principaux ; la société cesse de fonctionner.Le roman suit un ensemble de protagonistes au départ parqués sur la base puis vagabondant dans une ville aveugle en proie au chaos.",
  },
];

const BooksList = (props) => {
    const BooksListing = DUMMY_BOOKS.map((book) => (
      <BookItem key={book.id} id={book.id} name={book.name} description={book.description} price={book.price} />
    ));
    return (
      <section className={classes.books}>
        <Card className={props.card}>
          <ul>{BooksListing}</ul>
        </Card>
      </section>
    );
}

export default BooksList;