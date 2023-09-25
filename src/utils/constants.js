export const attack1 = {
  name: 'Поставить подножку',
  lucky: 'С обиженным воплем противник падает. Время действовать!',
  unlucky: 'Вместо  того, чтобы упасть, враг пребольно пинает вас в колено и переходит в атаку. Похоже, у вас проблемы.',
  win: 'В падении враг напарывается на собственное оружие. Какая нелепая смерть.',
  loose: 'Враг игнорирует вашу попытку и бьет вас в ухо. Последнее, что вы видите - его злобный оскал.'
};
export const attack2 = {
  name: 'Пнуть в голень',
  lucky: 'Противник отскакивает на одной ноге, поливая вас бранью. Вперед!',
  unlucky: 'Вы больно ушибли ногу о его броню. Враг атакует, ухмыляясь.',
  win: 'Противник воет от боли и молит о пощаде. Неожиданно, но почему бы и нет.',
  loose: 'Противник легко уворачивается и бьет вас в челюсть. Перед глазами все меркнет.'
};
export const attack3 = {
  name: 'Изысканно оскорбить, надавив на детские травмы',
  lucky: 'Противник обескуражен и ретравматизирован. Пока он приходит в себя, надо развить успех!',
  unlucky: 'Перебор с изысканностью: похоже, он не понял половины слов, но теперь пытается проломить вам череп. Берегитесь!..',
  win: 'Противник упал на колени и рыдает, бросив оружие. Жалкое зрелище.',
  loose: 'Противник внимательно слушает, а потом в два предложения убеждает вас, что все сказанное - проекция вашей собственной уязвимости. Вы больше не можете сражаться - это бессмысленно, как и вся ваша никчемная жизнь. Перед глазами все меркнет.'
};
export const superAttack1 = {
  name: 'Призвать Испепеляющее Некромантическое Звездное Пламя Ада',
  lucky: 'Столб мертвенного сияния обрушивается на противника с небес. Когда ваша сетчатка восстанавливается, вы видите, как он, пошатываясь, пытается подняться. Добьем его!',
  unlucky: 'Столб мертвенного сияния обрушивается на противника с небес. Когда ваша сетчатка восстанавливается, вы видите, что он стоит невредимый, паскудно ухмыляясь: юркая зараза просто отступила в сторону и теперь контратакует. Защищайтесь!',
  win: 'Столб мертвенного сияния обрушивается на противника с небес. Когда ваша сетчатка восстанавливается, от него остается только пепел на дне неглубокой воронки - ах да, и его душа теперь принадлежит вам навеки.',
  loose: 'Столб мертвенного сияния обрушивается с небес, но острая боль в черепе мешает вам дочитать заклинание: слишком долго, проклятый гаденыш добрался до вас раньше. Перед глазами все меркнет.'
};

export const REMOVE_CARD = 'REMOVE_CARD';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const SET_LOCATION = 'SET_LOCATION';
export const ON_CLICK = 'ON_CLICK';
export const REMOVE_ON_CLICK = 'REMOVE_ON_CLICK';
export const REMOVE_LOCATIONS = 'REMOVE_LOCATIONS';

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
        transcription: 'Эйфо'
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
        word: '',
        translation: 'Тверия',
        transcription: 'Тверия'
      },
      {
        word: '',
        translation: 'Тель-Авив',
        transcription: 'Тель-Авив'
      },
      {
        word: '',
        translation: 'Иерусалим',
        transcription: 'Ершалаим'
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
    ]
  },
  {
    name: 'Адрес',
    enName: 'Adress',
    words: [
      {
        word: 'בית',
        translation: 'Дом',
        transcription: 'Байт'
      },
      {
        word: 'רחוב',
        translation: 'Улица',
        transcription: 'РэхОв'
      },
      {
        word: 'דירה',
        translation: 'Квартира',
        transcription: 'ДирА'
      },
      {
        word: 'מספר',
        translation: 'Номер',
        transcription: 'МиспАр'
      }
    ]
  },
  {
    name: 'Приветствия и вежливость',
    enName: 'Greetings',
    words: [
      {
        word: '',
        translation: 'Хорошего дня',
        transcription: ''
      },
      {
        word: '',
        translation: 'Хорошего утра',
        transcription: ''
      },
      {
        word: '',
        translation: 'Хорошего вечера',
        transcription: ''
      },
      {
        word: 'סליחה',
        translation: 'Извините',
        transcription: 'СлихА'
      },
      {
        word: 'תודה רבה',
        translation: 'Большое спасибо',
        transcription: 'ТодА рабА'
      },
      {
        word: 'בבקשה',
        translation: 'До свидания',
        transcription: 'БевакашА'
      },
    ]
  },
  {
    name: 'Учеба',
    enName: 'Study',
    words: [
      {
        word: 'אולפן',
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
        word: 'אולפן',
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
        transcription: 'шалОшМорА'
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
      ,
      {
        word: 'גם',
        translation: 'Тоже',
        transcription: 'гам'
      },
    ]
  },
];
