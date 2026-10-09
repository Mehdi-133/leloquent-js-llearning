# 🧑‍🏫 Mentor Evaluation — Brief 3

> 📍 **Workstream:** Sprint 1 — Brief 3

> 🎉 **Brief 3 validated!**
>
> 📅 Received: 2026-10-07
> 🧭 Purpose: preserve the feedback and turn every improvement point into trackable practice.

## ✅ Points validés

- Mehdi présente un profil technique fort : MVC, OOP, Repository, interfaces / contrats et usage de Sequelize dans son projet.
- La mise en situation du 07/10 confirme l'appropriation Express / EJS : à partir d'un tableau `hotels`, il crée une route `/hotels`, liste les villes sous forme de liens, puis construit une page filtrée par ville affichant les hôtels concernés avec leur nom et leur nombre d'étoiles.
- Très bonne initiative méthodologique : avant de coder, Mehdi pose des commentaires décrivant son plan (`controller`, `route`, `view`, route dynamique). C'est une pratique saine et partageable à la classe.
- Le MVC est bien appliqué : controller sous forme de classe, `constructor`, initialisation de `this.hotels = hotels`, séparation route / controller / vue.
- Les oublis observés sont mineurs et syntaxiques : `res.render` au lieu d'un appel direct à `render`, syntaxe EJS à rafraîchir. La compréhension fonctionnelle est présente.
- Mehdi a également lancé un dépôt public d'apprentissage autour d'*Eloquent JavaScript*, structuré avec plan de progression, suivi, sessions et usage encadré d'agents IA. C'est une bonne manière de transformer les outils IA en support d'apprentissage plutôt qu'en raccourci.

## 🎯 Points à améliorer

- Augmenter le volume de pratique sans IA générative sur les bases : routes Express, vues EJS, paramètres dynamiques, filtres de tableaux, SQL brut.
- Refaire des exercices courts type Clash of Code, Exercism ou HackerRank pour automatiser la syntaxe et gagner en fluidité.
- Continuer à écrire soi-même des parties significatives des livrables, même si cela prend plus de temps.
- Mieux présenter ses choix techniques à l'oral : le niveau du projet mérite une mise en récit plus claire.
- Consolider SQL brut, en particulier `JOIN`, requêtes de filtre et explication sans Sequelize.

## 🚀 Action prioritaire du mentor

Refaire trois variantes de la mise en situation sans aide : `/hotels` par ville, puis par nombre d'étoiles, puis par équipement (`amenities`). Pour chaque variante : écrire d'abord le plan en commentaires, créer le controller, la route, la vue, puis expliquer le flux en 3 minutes. En parallèle, écrire un `JOIN` SQL simple à la main et l'expliquer.

## 🗺️ Action tracker

| Mission | Evidence needed | Status |
| --- | --- | --- |
| 🏙️ Filter hotels by city | Commented plan + controller + route + view + working page + 3-minute explanation | ⬜ Not started |
| ⭐ Filter hotels by star count | Commented plan + controller + route + view + working page + 3-minute explanation | ⬜ Not started |
| 🛎️ Filter hotels by amenity | Commented plan + controller + route + view + working page + 3-minute explanation | ⬜ Not started |
| 🗃️ Write a simple SQL `JOIN` | Handwritten query + verified result + explanation without Sequelize | ⬜ Not started |

## 🛡️ Learning guardrail

1. Mehdi reads the requirement and writes the plan in comments.
2. Mehdi makes and saves the first implementation without generative AI.
3. AI may then give a small hint, ask questions, or review the attempt.
4. The task is marked complete only after the code works and Mehdi can explain the flow clearly.

> 💡 **Rule:** AI may coach, question, and review—but Mehdi writes the first attempt.

## 💬 Appréciation

> Brief 3 validé. Bravo Mehdi : les efforts sont visibles et la mise en situation confirme que tu comprends ce que tu fais. Les petites erreurs de syntaxe sont normales et se corrigeront avec plus de pratique. Le point important maintenant est de protéger ton apprentissage : utiliser l'IA comme un coach et un cadre de progression, pas comme un raccourci qui écrit à ta place. Ton dépôt autour d'*Eloquent JavaScript* va dans le bon sens. Continue à pratiquer, à écrire toi-même, à expliquer tes choix, et à mieux valoriser ton vrai niveau technique.

## 🧠 Quick review

- **Your foundation is strong:** architecture and functional understanding are already present.
- **Your current training goal:** make syntax automatic through independent repetition.
- **Your professional goal:** explain *why* you chose a solution, not only show that it works.
- **Your winning method:** plan → code alone → run → explain → request review.

> 🌟 **Takeaway:** Your next level will come from repetition and explanation, not from learning more complicated tools.
