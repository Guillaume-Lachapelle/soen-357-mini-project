import { Component } from '@angular/core';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
})
export class AnalysisComponent {
  chartOptionsAge = {
    animationEnabled: true,
    theme: 'light2',
    exportEnabled: false,
    title: {
      text: 'Age Group Distribution',
    },
    subtitles: [
      {
        text: '',
      },
    ],
    data: [
      {
        type: 'pie', //change type to column, line, area, doughnut, etc
        indexLabel: '{name}: {y}%',
        dataPoints: [
          { name: '60-70', y: 23.1 },
          { name: '70-80', y: 15.4 },
          { name: '80-90', y: 15.4 },
          { name: '30-40', y: 7.7 },
          { name: '40-50', y: 7.7 },
          { name: '50-60', y: 30.8 },
        ],
      },
    ],
  };

  chartOptionsMarital = {
    animationEnabled: true,
    theme: 'light2',
    exportEnabled: false,
    title: {
      text: 'Marital Status',
    },
    subtitles: [
      {
        text: '',
      },
    ],
    data: [
      {
        type: 'pie', //change type to column, line, area, doughnut, etc
        indexLabel: '{name}: {y}%',
        dataPoints: [
          { name: 'Married/Marié(e)', y: 84.6 },
          { name: 'Relationship/Dans une relation', y: 7.7 },
          { name: 'Single/Célibataire', y: 7.7 },
        ],
      },
    ],
  };

  chartOptionsLike = {
    title: {
      text: 'How much do you use mobile apps?',
    },
    animationEnabled: true,
    axisY: {
      includeZero: true,
      suffix: '',
    },
    data: [
      {
        type: 'bar',
        indexLabel: '{y}',
        yValueFormatString: '#%',
        dataPoints: [
          { label: '1', y: 0 },
          { label: '2', y: 0.231 },
          { label: '3', y: 0.154 },
          { label: '4', y: 0.154 },
          { label: '5', y: 0.462 },
        ],
      },
    ],
  };

  chartOptionsComfort = {
    title: {
      text: 'Do you feel comfortable using new apps?',
    },
    animationEnabled: true,
    axisY: {
      includeZero: true,
      suffix: '',
    },
    data: [
      {
        type: 'bar',
        indexLabel: '{y}',
        yValueFormatString: '#,##%',
        dataPoints: [
          { label: '1', y: 0.77 },
          { label: '2', y: 0.231 },
          { label: '3', y: 0 },
          { label: '4', y: 0.308 },
          { label: '5', y: 0.385 },
        ],
      },
    ],
  };

  Questions = [
    {
      question:
        "     What do you like about mobile apps?/Qu'aimez-vous des applications mobiles?",
      answers: [
        'Easy access, efficient.',
        'They concentrate a lot of tools and have access to news and all kind of info wherever I go.',
        'Facile d’accès, convivial, rapide pour avoir info rapidement, notifications',
        'Easy to access from home screen',
      ],
    },
    {
      question:
        "What do you dislike about mobile apps?/Qu'est-ce que vous n'aimez pas des applications mobiles?",
      answers: [
        'Irrelevant information that pops up.',
        'Quand ça ne sauvegardempas mes infos pour la prochaine fois, quand ça se met à jour pendant que je tente de l’utiliser, quand ça donne de l’info seulement à destination (club med)',
        'Very small writing or very huge writing, low contrast.',
        'Complicated navigation and updates',
      ],
    },

    {
      question:
        'How do you think covid-19 has affected mental wellbeing?/Comment pensez-vous que la covid-19 a affecté la santé mentale?',
      answers: [
        'Énormement! L’anxiété des gens a augmenté en flèche, et il y a plus d’isolement vu lampeur de contamination donc les gens vont plus sur les reseaux sociaux, ce qui cause des debordements et augmente la detresse',
        "It has made me less tolerant of other people's ignorance.",
        'People are more isolated',
        'Complicated navigation and updates',
      ],
    },

    {
      question:
        "What kind of app do you think would help people improve their mental health after covid-19?/Quel  type d'application pourrait aider les gens à améliorer leur santé mentale après la covid-19?",
      answers: [
        'An application that can offer different games so I do not have to jump from one to another.',
        'Probably entertainment apps. Something like YouTube.',
        "An app where people can share ideas. Something where people aren't exposed to fake news.",
      ],
    },

    {
      question:
        "What kind of app do you think would help people who feel isolated?/Quel type d'application pourrait aider les personnes qui se sentent isolées?",
      answers: [
        'An app to provide reliable information about news and current events..',
        'An application that allows you to be in touch with others like facetime or messenger.',
        'An app that genuinely connects them with friends and family instead of bombarding them with senseless ad, propaganda, and media nonsense.',
      ],
    },
  ];
}
