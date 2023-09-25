export const REMOVE_CARD = 'REMOVE_CARD';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const SET_LOCATION = 'SET_LOCATION';
export const ON_CLICK = 'ON_CLICK';
export const REMOVE_ON_CLICK = 'REMOVE_ON_CLICK';
export const REMOVE_LOCATIONS = 'REMOVE_LOCATIONS';
export const SET_DECK = 'SET_DECK';
export const CLEAR_CURRENT_DECK = 'CLEAR_CURRENT_DECK';
export const SET_WORD = 'SET_WORD';
export const CLEAR_CURRENT_WORD = 'CLEAR_CURRENT_WORD';

/*export const topics = {
  ruTopics: [
    'Адрес', 
    'Вопросы', 
    'Города', 
    'Дни недели', 
    'Имена', 
    'Учеба', 
    'Приветствия', 
    'Страны', 
    'Организации/Места', 
    'Числа', 
    'Разное',
  ],
  enTopics: [
    'Address',
    'Cities', 
    'Countries', 
    'Days of Week',
    'Greetings',
    'Names',
    'Numbers',
    'Organizations/Places', 
    'Study', 
    'Questions', 
    'Other',
  ]
};*/

export const topics = [
  {
    ruTopic: 'Адрес',
    enTopic: 'Address',
  },
  {
    ruTopic: 'Вопросы',
    enTopic: 'Questions',
  },
  {
    ruTopic: 'Города',
    enTopic: 'Cities',
  },
  {
    ruTopic: 'Дни недели',
    enTopic: 'Days of Week',
  },
  {
    ruTopic: 'Имена',
    enTopic: 'Names',
  },
  {
    ruTopic: 'Учеба',
    enTopic: 'Study',
  },
  {
    ruTopic: 'Приветствия',
    enTopic: 'Greetings',
  },
  {
    ruTopic: 'Страны',
    enTopic: 'Countries',
  },
  {
    ruTopic: 'Организации/Места',
    enTopic: 'Organizations',
  },
  {
    ruTopic: 'Числа',
    enTopic: 'Numbers',
  },
  {
    ruTopic: 'Разное',
    enTopic: 'Other',
  },
];

export const vocabulary = [
  {
    word: 'יום ראשון',
    translation: 'Воскресенье (день первый)',
    transcription: 'йом ришОн',
    ruTopic: ['Дни недели'],
    enTopic: ['Days of Week'],
  },
  {
    word: 'יום שני',
    translation: 'Понедельник (день второй)',
    transcription: 'йом шэнИ',
    ruTopic: ['Дни недели'],
    enTopic: ['Days of Week'],
  },
  {
    word: 'יום שלישי',
    translation: 'Вторник (день третий)',
    transcription: 'йом ШлишИ',
    ruTopic: ['Дни недели'],
    enTopic: ['Days of Week'],
  },
  {
    word: 'יום רביעי',
    translation: 'Среда (день четвертый)',
    transcription: 'йом рэвии',
    ruTopic: ['Дни недели'],
    enTopic: ['Days of Week'],
  },
  {
    word: 'יום חמישי',
    translation: 'Четверг (день пятый)',
    transcription: 'йом хамиши',
    ruTopic: ['Дни недели'],
    enTopic: ['Days of Week'],
  },
  {
    word: 'יום שישי',
    translation: 'Пятница (день шестой)',
    transcription: 'йом шишИ',
    ruTopic: ['Дни недели'],
    enTopic: ['Days of Week'],
  },
  {
    word: 'שבת',
    translation: 'Суббота/шаббат',
    transcription: 'шаббАт',
    ruTopic: ['Дни недели'],
    enTopic: ['Days of Week'],
  },
  {
    word: 'מה',
    translation: 'Что?',
    transcription: 'ма',
    ruTopic: ['Вопросы'],
    enTopic: ['Questions'],
  },
  {
    word: 'מי',
    translation: 'Кто?',
    transcription: 'ми',
    ruTopic: ['Вопросы'],
    enTopic: ['Questions'],
  },
  {
    word: 'מאין',
    translation: 'Откуда?',
    transcription: 'мэАйн',
    ruTopic: ['Вопросы'],
    enTopic: ['Questions'],
  },
  {
    word: 'איפה',
    translation: 'Где?',
    transcription: 'эйфо',
    ruTopic: ['Вопросы'],
    enTopic: ['Questions'],
  },
  {
    word: 'למה',
    translation: 'Почему?',
    transcription: 'ламА',
    ruTopic: ['Вопросы'],
    enTopic: ['Questions'],
  },
  {
    word: 'שרה',
    translation: 'Сара',
    transcription: 'Сара',
    ruTopic: ['Имена'],
    enTopic: ['Names'],
  },
  {
    word: 'יצחק',
    translation: 'Ицхак',
    transcription: 'ИцхАк',
    ruTopic: ['Имена'],
    enTopic: ['Names'],
  },
  {
    word: 'רותי',
    translation: 'Рути',
    transcription: 'РУти',
    ruTopic: ['Имена'],
    enTopic: ['Names'],
  },
  {
    word: 'יוסף',
    translation: 'Иосеф',
    transcription: 'ИОсеф',
    ruTopic: ['Имена'],
    enTopic: ['Names'],
  },
  {
    word: 'מרינה',
    translation: 'Марина',
    transcription: 'МарИна',
    ruTopic: ['Имена'],
    enTopic: ['Names'],
  },
  {
    word: 'דינה',
    translation: 'Дина',
    transcription: 'ДИна',
    ruTopic: ['Имена'],
    enTopic: ['Names'],
  },
  {
    word: 'דניאל',
    translation: 'Даниэль',
    transcription: 'Даниэль',
    ruTopic: ['Имена'],
    enTopic: ['Names'],
  },
  {
    word: 'דורית',
    translation: 'Дорит (ж.р.)',
    transcription: 'Дорит',
    ruTopic: ['Имена'],
    enTopic: ['Names'],
  },
  {
    word: 'מיכאל',
    translation: 'Михаэль',
    transcription: 'Михаэль',
    ruTopic: ['Имена'],
    enTopic: ['Names'],
  },
  {
    word: 'אורי',
    translation: 'Ури',
    transcription: 'Ури',
    ruTopic: ['Имена'],
    enTopic: ['Names'],
  },
  {
    word: 'רחל',
    translation: 'Рахэль',
    transcription: 'РахЭль',
    ruTopic: ['Имена'],
    enTopic: ['Names'],
  },
  {
    word: 'ענת',
    translation: 'Анат',
    transcription: 'Анат',
    ruTopic: ['Имена'],
    enTopic: ['Names'],
  },
  {
    word: 'גיון',
    translation: 'Джон',
    transcription: 'Джон',
    ruTopic: ['Имена'],
    enTopic: ['Names'],
  },
  {
    word: 'בוריס',
    translation: 'Борис',
    transcription: 'Борис',
    ruTopic: ['Имена'],
    enTopic: ['Names'],
  },
  {
    word: 'טבריה',
    translation: 'Тверия',
    transcription: 'ТвЕрия',
    ruTopic: ['Города'],
    enTopic: ['Cities'],
  },
  {
    word: 'תל-אביב',
    translation: 'Тель-Авив',
    transcription: 'Тель-АвИв',
    ruTopic: ['Города'],
    enTopic: ['Cities'],
  },
  {
    word: 'ירושלים',
    translation: 'Иерусалим',
    transcription: 'ЕршалАим',
    ruTopic: ['Города'],
    enTopic: ['Cities'],
  },
  {
    word: 'חיפה',
    translation: 'Хайфа',
    transcription: 'ХАйфа',
    ruTopic: ['Города'],
    enTopic: ['Cities'],
  },
  {
    word: 'ספרד',
    translation: 'Испания',
    transcription: 'ШпАнье',
    ruTopic: ['Страны'],
    enTopic: ['Countries'],
  },
  {
    word: 'אנגליה',
    translation: 'Англия',
    transcription: 'Эйнгланд',
    ruTopic: ['Страны'],
    enTopic: ['Countries'],
  },      
  {
    word: 'רוסיה',
    translation: 'Россия',
    transcription: 'РУссиа',
    ruTopic: ['Страны'],
    enTopic: ['Countries'],
  },
  {
    word: 'אוקראינה',
    translation: 'Украина',
    transcription: 'УкраИнэ',
    ruTopic: ['Страны'],
    enTopic: ['Countries'],
  },
  {
    word: 'צרפת',
    translation: 'Франция',
    transcription: 'ФрАнкрайх',
    ruTopic: ['Страны'],
    enTopic: ['Countries'],
  },
  {
    word: 'ישראל',
    translation: 'Израиль',
    transcription: 'ИзроЭл',
    ruTopic: ['Страны'],
    enTopic: ['Countries'],
  },
  {
    word: 'עיראק',
    translation: 'Ирак',
    transcription: 'Ирак',
    ruTopic: ['Страны'],
    enTopic: ['Countries'],
  },
  {
    word: 'איראן',
    translation: 'Иран',
    transcription: 'Иран',
    ruTopic: ['Страны'],
    enTopic: ['Countries'],
  },
  {
    word: 'בית',
    translation: 'Дом',
    transcription: 'бАйт',
    ruTopic: ['Адрес'],
    enTopic: ['Address'],
  },
  {
    word: 'רחוב',
    translation: 'Улица',
    transcription: 'рэхОв',
    ruTopic: ['Адрес'],
    enTopic: ['Address'],
  },
  {
    word: 'דירה',
    translation: 'Квартира',
    transcription: 'дирА',
    ruTopic: ['Адрес'],
    enTopic: ['Address'],
  },
  {
    word: 'מספר',
    translation: 'Номер',
    transcription: 'миспАр',
    ruTopic: ['Адрес'],
    enTopic: ['Address'],
  },
  {
    word: 'יוֹם טוֹב',
    translation: 'Хорошего дня',
    transcription: 'йом тов',
    ruTopic: ['Приветствия'],
    enTopic: ['Greetings'],
  },
  {
    word: 'בּוֹקֶר טוֹב',
    translation: 'Хорошего утра',
    transcription: 'бОкер тов',
    ruTopic: ['Приветствия'],
    enTopic: ['Greetings'],
  },
  {
    word: 'עֶרֶב טוֹב',
    translation: 'Хорошего вечера',
    transcription: 'Эрев тов',
    ruTopic: ['Приветствия'],
    enTopic: ['Greetings'],
  },
  {
    word: 'לַילָה טוֹב',
    translation: 'Хорошей ночи',
    transcription: 'лАйла тов',
    ruTopic: ['Приветствия'],
    enTopic: ['Greetings'],
  },
  {
    word: 'סליחה',
    translation: 'Извините',
    transcription: 'слихА',
    ruTopic: ['Приветствия'],
    enTopic: ['Greetings'],
  },
  {
    word: 'תודה רבה',
    translation: 'Большое спасибо',
    transcription: 'тодА рабА',
    ruTopic: ['Приветствия'],
    enTopic: ['Greetings'],
  },
  {
    word: 'בבקשה',
    translation: 'Пожалуйста',
    transcription: 'бевакашА',
    ruTopic: ['Приветствия'],
    enTopic: ['Greetings'],
  },
  {
    word: 'בְּהַצלָחָה',
    translation: 'Успеха',
    transcription: 'бе(h)ацлаха',
    ruTopic: ['Приветствия'],
    enTopic: ['Greetings'],
  },
  {
    word: 'אןלפן',
    translation: 'Ульпан',
    transcription: 'ульпАн',
    ruTopic: ['Учеба', 'Организации/Места'],
    enTopic: ['Study', 'Organizations/Places'],
  },
  {
    word: 'אוניברסיטה',
    translation: 'Университет',
    transcription: 'унивенситА',
    ruTopic: ['Учеба', 'Организации/Места'],
    enTopic: ['Study', 'Organizations/Places'],
  },
  {
    word: 'תלמיד',
    translation: 'Ученик',
    transcription: 'талмИд',
    ruTopic: ['Учеба'],
    enTopic: ['Study'],
  },
  {
    word: 'סטודנט',
    translation: 'Студент',
    transcription: 'студЭнт',
    ruTopic: ['Учеба'],
    enTopic: ['Study'],
  },
  {
    word: 'מורה',
    translation: 'Учительница',
    transcription: 'морА',
    ruTopic: ['Учеба'],
    enTopic: ['Study'],
  },
  {
    word: 'לומד',
    translation: 'Учиться',
    transcription: 'ломЭд',
    ruTopic: ['Учеба'],
    enTopic: ['Study'],
  },
  {
    word: 'בית-ספר',
    translation: 'Школа (дом книги)',
    transcription: 'бЕйт сэфЭр',
    ruTopic: ['Учеба', 'Организации/Места'],
    enTopic: ['Study', 'Organizations/Places'],
  },
  {
    word: 'כליתה',
    translation: 'Класс',
    transcription: 'клитА',
    ruTopic: ['Учеба'],
    enTopic: ['Study'],
  },
  {
    word: 'משטרה',
    translation: 'Полиция',
    transcription: 'миштарА',
    ruTopic: ['Организации/Места'],
    enTopic: ['Organizations/Places'],
  },
  {
    word: 'בנק',
    translation: 'Банк',
    transcription: 'банк',
    ruTopic: ['Организации/Места'],
    enTopic: ['Organizations/Places'],
  },
  {
    word: '',
    translation: 'Кафе',
    transcription: 'кафе',
    ruTopic: ['Организации/Места'],
    enTopic: ['Organizations/Places'],
  },
  {
    word: 'ספרייה',
    translation: 'Библиотека',
    transcription: 'сфирИя',
    ruTopic: ['Организации/Места'],
    enTopic: ['Organizations/Places'],
  },
  {
    word: 'מסעדה',
    translation: 'Ресторан',
    transcription: 'мисадА',
    ruTopic: ['Организации/Места'],
    enTopic: ['Organizations/Places'],
  },
  {
    word: 'אפס',
    translation: 'Ноль',
    transcription: 'эфЭс',
    ruTopic: ['Числа'],
    enTopic: ['Numbers'],
  },
  {
    word: 'אחת',
    translation: 'Один',
    transcription: 'ахАт',
    ruTopic: ['Числа'],
    enTopic: ['Numbers'],
  },
  {
    word: 'שתיימ',
    translation: 'Два',
    transcription: 'штАйм',
    ruTopic: ['Числа'],
    enTopic: ['Numbers'],
  },
  {
    word: 'שלוש',
    translation: 'Три',
    transcription: 'шалОш',
    ruTopic: ['Числа'],
    enTopic: ['Numbers'],
  },
  {
    word: 'ארבע',
    translation: 'Четыре',
    transcription: 'арбА',
    ruTopic: ['Числа'],
    enTopic: ['Numbers'],
  },
  {
    word: 'חמש',
    translation: 'Пять',
    transcription: 'хамЭш',
    ruTopic: ['Числа'],
    enTopic: ['Numbers'],
  },
  {
    word: 'שש',
    translation: 'Шесть',
    transcription: 'шеш',
    ruTopic: ['Числа'],
    enTopic: ['Numbers'],
  },
  {
    word: 'שבע',
    translation: 'Семь',
    transcription: 'шэвА',
    ruTopic: ['Числа'],
    enTopic: ['Numbers'],
  },
  {
    word: 'שמונה',
    translation: 'Восемь',
    transcription: 'шмони',
    ruTopic: ['Числа'],
    enTopic: ['Numbers'],
  },
  {
    word: 'תשע',
    translation: 'Девять',
    transcription: 'тэшА',
    ruTopic: ['Числа'],
    enTopic: ['Numbers'],
  },
  {
    word: 'עשר',
    translation: 'Десять',
    transcription: 'эсрЭ',
    ruTopic: ['Числа'],
    enTopic: ['Numbers'],
  },
  {
    word: 'מאה',
    translation: 'Сто',
    transcription: 'мЭа',
    ruTopic: ['Числа'],
    enTopic: ['Numbers'],
  },
  {
    word: 'טלפון',
    translation: 'Телефон',
    transcription: 'Тэлэфон',
    ruTopic: ['Разное'],
    enTopic: ['Other'],
  },
  {
    word: 'עברית',
    translation: 'Иврит',
    transcription: 'Иврит',
    ruTopic: ['Разное'],
    enTopic: ['Other'],
  },
  {
    word: 'קצת',
    translation: 'Ненадолго',
    transcription: 'Кцат',
    ruTopic: ['Разное'],
    enTopic: ['Other'],
  },
  {
    word: 'גם',
    translation: 'Тоже',
    transcription: 'гам',
    ruTopic: ['Разное'],
    enTopic: ['Other'],
  },
];

export const decks = [
  {
    name: 'Дни недели',
    enName: 'Days of Week',
    words: [
      {
        word: 'יום ראשון',
        translation: 'Воскресенье (день первый)',
        transcription: 'йом ришОн'
      },
      {
        word: 'יום שני',
        translation: 'Понедельник (день второй)',
        transcription: 'йом шэнИ'
      },
      {
        word: 'יום שלישי',
        translation: 'Вторник (день третий)',
        transcription: 'йом ШлишИ'
      },
      {
        word: 'יום רביעי',
        translation: 'Среда (день четвертый)',
        transcription: 'йом рэвии'
      },
      {
        word: 'יום חמישי',
        translation: 'Четверг (день пятый)',
        transcription: 'йом хамиши'
      },
      {
        word: 'יום שישי',
        translation: 'Пятница (день шестой)',
        transcription: 'йом шишИ'
      },
      {
        word: 'שבת',
        translation: 'Суббота/шаббат',
        transcription: 'шаббАт'
      }
    ]
  },
  {
    name: 'Вопросы',
    enName: 'Questions',
    words: [
      {
        word: 'מה',
        translation: 'Что?',
        transcription: 'ма'
      },
      {
        word: 'מי',
        translation: 'Кто?',
        transcription: 'ми'
      },
      {
        word: 'מאין',
        translation: 'Откуда?',
        transcription: 'мэАйн'
      },
      {
        word: 'איפה',
        translation: 'Где?',
        transcription: 'эйфо'
      },
      {
        word: 'למה',
        translation: 'Почему?',
        transcription: 'ламА'
      }
    ]
  },
  {
    name: 'Имена',
    enName: 'Names',
    words: [
      {
        word: 'שרה',
        translation: 'Сара',
        transcription: 'Сара'
      },
      {
        word: 'יצחק',
        translation: 'Ицхак',
        transcription: 'ИцхАк'
      },
      {
        word: 'רותי',
        translation: 'Рути',
        transcription: 'РУти'
      },
      {
        word: 'יוסף',
        translation: 'Иосеф',
        transcription: 'ИОсеф'
      }/*,
      {
        word: 'יוסי',
        translation: 'Иоси',
        transcription: 'ИОси'
      }*/,
      {
        word: 'מרינה',
        translation: 'Марина',
        transcription: 'МарИна'
      },
      {
        word: 'דינה',
        translation: 'Дина',
        transcription: 'ДИна'
      },
      {
        word: 'דניאל',
        translation: 'Даниэль',
        transcription: 'Даниэль'
      },
      {
        word: 'דורית',
        translation: 'Дорит (ж.р.)',
        transcription: 'Дорит'
      },
      {
        word: 'מיכאל',
        translation: 'Михаэль',
        transcription: 'Михаэль'
      },
      {
        word: 'אורי',
        translation: 'Ури',
        transcription: 'Ури'
      },
      {
        word: 'רחל',
        translation: 'Рахэль',
        transcription: 'РахЭль'
      },
      {
        word: 'ענת',
        translation: 'Анат',
        transcription: 'Анат'
      },
      {
        word: 'גיון',
        translation: 'Джон',
        transcription: 'Джон'
      },
      {
        word: 'בוריס',
        translation: 'Борис',
        transcription: 'Борис'
      },
    ]
  },
  {
    name: 'Города',
    enName: 'Cities',
    words: [
      {
        word: 'טבריה',
        translation: 'Тверия',
        transcription: 'Тверия'
      },
      {
        word: 'תל-אביב',
        translation: 'Тель-Авив',
        transcription: 'Тель-Авив'
      },
      {
        word: 'ירושלים',
        translation: 'Иерусалим',
        transcription: 'Ершалаим'
      },
      {
        word: 'חיפה',
        translation: 'Хайфа',
        transcription: 'Хайфа'
      }
    ]
  },
  {
    name: 'Страны',
    enName: 'Countries',
    words: [
      {
        word: 'ספרד',
        translation: 'Испания',
        transcription: 'ШпАнье'
      },
      {
        word: 'אנגליה',
        translation: 'Англия',
        transcription: 'Эйнгланд'
      },      {
        word: 'רוסיה',
        translation: 'Россия',
        transcription: 'РУссиа'
      },
      {
        word: 'אוקראינה',
        translation: 'Украина',
        transcription: 'УкраИнэ'
      },
      {
        word: 'צרפת',
        translation: 'Франция',
        transcription: 'ФрАнкрайх'
      },
      {
        word: 'ישראל',
        translation: 'Израиль',
        transcription: 'ИзрОэл'
      },
      {
        word: 'עיראק',
        translation: 'Ирак',
        transcription: 'Ирак'
      },
      {
        word: 'איראן',
        translation: 'Иран',
        transcription: 'Иран'
      },
    ]
  },
  {
    name: 'Адрес',
    enName: 'Adress',
    words: [
      {
        word: 'בית',
        translation: 'Дом',
        transcription: 'бАйт'
      },
      {
        word: 'רחוב',
        translation: 'Улица',
        transcription: 'рэхОв'
      },
      {
        word: 'דירה',
        translation: 'Квартира',
        transcription: 'дирА'
      },
      {
        word: 'מספר',
        translation: 'Номер',
        transcription: 'миспАр'
      }
    ]
  },
  {
    name: 'Приветствия',
    enName: 'Greetings',
    words: [
      {
        word: 'יוֹם טוֹב',
        translation: 'Хорошего дня',
        transcription: 'йом тов'
      },
      {
        word: 'בּוֹקֶר טוֹב',
        translation: 'Хорошего утра',
        transcription: 'бОкер тов'
      },
      {
        word: 'עֶרֶב טוֹב',
        translation: 'Хорошего вечера',
        transcription: 'Эрев тов'
      },
      {
        word: 'לַילָה טוֹב',
        translation: 'Хорошей ночи',
        transcription: 'лАйла тов'
      },
      {
        word: 'סליחה',
        translation: 'Извините',
        transcription: 'слихА'
      },
      {
        word: 'תודה רבה',
        translation: 'Большое спасибо',
        transcription: 'тодА рабА'
      },
      {
        word: 'בבקשה',
        translation: 'Пожалуйста',
        transcription: 'бевакашА'
      },
      {
        word: 'בְּהַצלָחָה',
        translation: 'Успеха',
        transcription: 'бе(h)ацлаха'
      },
    ]
  },
  {
    name: 'Учеба',
    enName: 'Study',
    words: [
      {
        word: 'אןלפן',
        translation: 'Ульпан',
        transcription: 'ульпАн'
      },
      {
        word: 'אוניברסיטה',
        translation: 'Университет',
        transcription: 'унивенситА'
      },
      {
        word: 'תלמיד',
        translation: 'Ученик',
        transcription: 'талмИд'
      },
      {
        word: 'סטודנט',
        translation: 'Студент',
        transcription: 'студЭнт'
      },
      {
        word: '',
        translation: 'Учительница',
        transcription: 'морА'
      },
      {
        word: 'לומד',
        translation: 'Учиться',
        transcription: 'ломЭд'
      },
      {
        word: 'בית-ספר',
        translation: 'Школа (дом книги)',
        transcription: 'бЕйт сэфЭр'
      },
      {
        word: 'כליתה',
        translation: 'Класс',
        transcription: 'клитА'
      }
    ]
  },
  {
    name: 'Организации',
    enName: 'Organizations',
    words: [
      {
        word: 'אןלפן',
        translation: 'Ульпан',
        transcription: 'ульпАн'
      },
      {
        word: 'אוניברסיטה',
        translation: 'Университет',
        transcription: 'унивенситА'
      },
      {
        word: 'משטרה',
        translation: 'Полиция',
        transcription: 'миштарА'
      },
      {
        word: 'בנק',
        translation: 'Банк',
        transcription: 'банк'
      },
      {
        word: '',
        translation: 'Кафе',
        transcription: 'кафе'
      },
      {
        word: 'ספרייה',
        translation: 'Библиотека',
        transcription: 'сфирИя'
      },
      {
        word: 'מסעדה',
        translation: 'Ресторан',
        transcription: 'мисадА'
      },
      {
        word: 'בית-ספר',
        translation: 'Школа (дом книги)',
        transcription: 'бЕйт сэфЭр'
      },/*,
      {
        word: 'מגן דוד אדום',
        translation: 'Скорая помощь',
        transcription: ''
      },
      {
        word: 'מכבי אש',
        translation: 'Пожарная',
        transcription: 'ЛомЭд'
      }*/
    ]
  },
  {
    name: 'Числа',
    enName: 'Numbers',
    words: [
      {
        word: 'אפס',
        translation: 'Ноль',
        transcription: 'эфЭс'
      },
      {
        word: 'אחת',
        translation: 'Один',
        transcription: 'ахАт'
      },
      {
        word: 'שתיימ',
        translation: 'Два',
        transcription: 'штАйм'
      },
      {
        word: 'שלוש',
        translation: 'Три',
        transcription: 'шалОш'
      },
      {
        word: 'ארבע',
        translation: 'Четыре',
        transcription: 'арбА'
      },
      {
        word: 'חמש',
        translation: 'Пять',
        transcription: 'хамЭш'
      },
      {
        word: 'שש',
        translation: 'Шесть',
        transcription: 'шеш'
      },
      {
        word: 'שבע',
        translation: 'Семь',
        transcription: 'шэвА'
      },
      {
        word: 'שמונה',
        translation: 'Восемь',
        transcription: 'шмони'
      },
      {
        word: 'תשע',
        translation: 'Девять',
        transcription: 'тэшА'
      },
      {
        word: 'עשר',
        translation: 'Десять',
        transcription: 'эсрЭ'
      },
      {
        word: 'מאה',
        translation: 'Сто',
        transcription: 'мЭа'
      }
    ]
  },
  {
    name: 'Разное',
    enName: 'Any other staff',
    words: [
      {
        word: 'טלפון',
        translation: 'Телефон',
        transcription: 'Тэлэфон'
      },
      {
        word: 'עברית',
        translation: 'Иврит',
        transcription: 'Иврит'
      },
      {
        word: 'קצת',
        translation: 'Ненадолго',
        transcription: 'Кцат'
      },
      {
        word: 'גם',
        translation: 'Тоже',
        transcription: 'гам'
      },
    ]
  },
];
