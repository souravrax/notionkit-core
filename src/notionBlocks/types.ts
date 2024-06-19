type IdRequest = string | string;
export type PersonUserObjectResponse = {
    type: "person";
    person: {
        email?: string;
    };
    name: string | null;
    avatar_url: string | null;
    id: IdRequest;
    object: "user";
};
type EmptyObject = Record<string, never>;
export type PartialUserObjectResponse = {
    id: IdRequest;
    object: "user";
};
export type BotUserObjectResponse = {
    type: "bot";
    bot:
        | EmptyObject
        | {
              owner:
                  | {
                        type: "user";
                        user:
                            | {
                                  type: "person";
                                  person: {
                                      email: string;
                                  };
                                  name: string | null;
                                  avatar_url: string | null;
                                  id: IdRequest;
                                  object: "user";
                              }
                            | PartialUserObjectResponse;
                    }
                  | {
                        type: "workspace";
                        workspace: true;
                    };
              workspace_name: string | null;
          };
    name: string | null;
    avatar_url: string | null;
    id: IdRequest;
    object: "user";
};
export type UserObjectResponse =
    | PersonUserObjectResponse
    | BotUserObjectResponse;
type SelectColor =
    | "default"
    | "gray"
    | "brown"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "red";
type PartialSelectResponse = {
    id: string;
    name: string;
    color: SelectColor;
};
type TimeZoneRequest =
    | "Africa/Abidjan"
    | "Africa/Accra"
    | "Africa/Addis_Ababa"
    | "Africa/Algiers"
    | "Africa/Asmara"
    | "Africa/Asmera"
    | "Africa/Bamako"
    | "Africa/Bangui"
    | "Africa/Banjul"
    | "Africa/Bissau"
    | "Africa/Blantyre"
    | "Africa/Brazzaville"
    | "Africa/Bujumbura"
    | "Africa/Cairo"
    | "Africa/Casablanca"
    | "Africa/Ceuta"
    | "Africa/Conakry"
    | "Africa/Dakar"
    | "Africa/Dar_es_Salaam"
    | "Africa/Djibouti"
    | "Africa/Douala"
    | "Africa/El_Aaiun"
    | "Africa/Freetown"
    | "Africa/Gaborone"
    | "Africa/Harare"
    | "Africa/Johannesburg"
    | "Africa/Juba"
    | "Africa/Kampala"
    | "Africa/Khartoum"
    | "Africa/Kigali"
    | "Africa/Kinshasa"
    | "Africa/Lagos"
    | "Africa/Libreville"
    | "Africa/Lome"
    | "Africa/Luanda"
    | "Africa/Lubumbashi"
    | "Africa/Lusaka"
    | "Africa/Malabo"
    | "Africa/Maputo"
    | "Africa/Maseru"
    | "Africa/Mbabane"
    | "Africa/Mogadishu"
    | "Africa/Monrovia"
    | "Africa/Nairobi"
    | "Africa/Ndjamena"
    | "Africa/Niamey"
    | "Africa/Nouakchott"
    | "Africa/Ouagadougou"
    | "Africa/Porto-Novo"
    | "Africa/Sao_Tome"
    | "Africa/Timbuktu"
    | "Africa/Tripoli"
    | "Africa/Tunis"
    | "Africa/Windhoek"
    | "America/Adak"
    | "America/Anchorage"
    | "America/Anguilla"
    | "America/Antigua"
    | "America/Araguaina"
    | "America/Argentina/Buenos_Aires"
    | "America/Argentina/Catamarca"
    | "America/Argentina/ComodRivadavia"
    | "America/Argentina/Cordoba"
    | "America/Argentina/Jujuy"
    | "America/Argentina/La_Rioja"
    | "America/Argentina/Mendoza"
    | "America/Argentina/Rio_Gallegos"
    | "America/Argentina/Salta"
    | "America/Argentina/San_Juan"
    | "America/Argentina/San_Luis"
    | "America/Argentina/Tucuman"
    | "America/Argentina/Ushuaia"
    | "America/Aruba"
    | "America/Asuncion"
    | "America/Atikokan"
    | "America/Atka"
    | "America/Bahia"
    | "America/Bahia_Banderas"
    | "America/Barbados"
    | "America/Belem"
    | "America/Belize"
    | "America/Blanc-Sablon"
    | "America/Boa_Vista"
    | "America/Bogota"
    | "America/Boise"
    | "America/Buenos_Aires"
    | "America/Cambridge_Bay"
    | "America/Campo_Grande"
    | "America/Cancun"
    | "America/Caracas"
    | "America/Catamarca"
    | "America/Cayenne"
    | "America/Cayman"
    | "America/Chicago"
    | "America/Chihuahua"
    | "America/Ciudad_Juarez"
    | "America/Coral_Harbour"
    | "America/Cordoba"
    | "America/Costa_Rica"
    | "America/Creston"
    | "America/Cuiaba"
    | "America/Curacao"
    | "America/Danmarkshavn"
    | "America/Dawson"
    | "America/Dawson_Creek"
    | "America/Denver"
    | "America/Detroit"
    | "America/Dominica"
    | "America/Edmonton"
    | "America/Eirunepe"
    | "America/El_Salvador"
    | "America/Ensenada"
    | "America/Fort_Nelson"
    | "America/Fort_Wayne"
    | "America/Fortaleza"
    | "America/Glace_Bay"
    | "America/Godthab"
    | "America/Goose_Bay"
    | "America/Grand_Turk"
    | "America/Grenada"
    | "America/Guadeloupe"
    | "America/Guatemala"
    | "America/Guayaquil"
    | "America/Guyana"
    | "America/Halifax"
    | "America/Havana"
    | "America/Hermosillo"
    | "America/Indiana/Indianapolis"
    | "America/Indiana/Knox"
    | "America/Indiana/Marengo"
    | "America/Indiana/Petersburg"
    | "America/Indiana/Tell_City"
    | "America/Indiana/Vevay"
    | "America/Indiana/Vincennes"
    | "America/Indiana/Winamac"
    | "America/Indianapolis"
    | "America/Inuvik"
    | "America/Iqaluit"
    | "America/Jamaica"
    | "America/Jujuy"
    | "America/Juneau"
    | "America/Kentucky/Louisville"
    | "America/Kentucky/Monticello"
    | "America/Knox_IN"
    | "America/Kralendijk"
    | "America/La_Paz"
    | "America/Lima"
    | "America/Los_Angeles"
    | "America/Louisville"
    | "America/Lower_Princes"
    | "America/Maceio"
    | "America/Managua"
    | "America/Manaus"
    | "America/Marigot"
    | "America/Martinique"
    | "America/Matamoros"
    | "America/Mazatlan"
    | "America/Mendoza"
    | "America/Menominee"
    | "America/Merida"
    | "America/Metlakatla"
    | "America/Mexico_City"
    | "America/Miquelon"
    | "America/Moncton"
    | "America/Monterrey"
    | "America/Montevideo"
    | "America/Montreal"
    | "America/Montserrat"
    | "America/Nassau"
    | "America/New_York"
    | "America/Nipigon"
    | "America/Nome"
    | "America/Noronha"
    | "America/North_Dakota/Beulah"
    | "America/North_Dakota/Center"
    | "America/North_Dakota/New_Salem"
    | "America/Nuuk"
    | "America/Ojinaga"
    | "America/Panama"
    | "America/Pangnirtung"
    | "America/Paramaribo"
    | "America/Phoenix"
    | "America/Port-au-Prince"
    | "America/Port_of_Spain"
    | "America/Porto_Acre"
    | "America/Porto_Velho"
    | "America/Puerto_Rico"
    | "America/Punta_Arenas"
    | "America/Rainy_River"
    | "America/Rankin_Inlet"
    | "America/Recife"
    | "America/Regina"
    | "America/Resolute"
    | "America/Rio_Branco"
    | "America/Rosario"
    | "America/Santa_Isabel"
    | "America/Santarem"
    | "America/Santiago"
    | "America/Santo_Domingo"
    | "America/Sao_Paulo"
    | "America/Scoresbysund"
    | "America/Shiprock"
    | "America/Sitka"
    | "America/St_Barthelemy"
    | "America/St_Johns"
    | "America/St_Kitts"
    | "America/St_Lucia"
    | "America/St_Thomas"
    | "America/St_Vincent"
    | "America/Swift_Current"
    | "America/Tegucigalpa"
    | "America/Thule"
    | "America/Thunder_Bay"
    | "America/Tijuana"
    | "America/Toronto"
    | "America/Tortola"
    | "America/Vancouver"
    | "America/Virgin"
    | "America/Whitehorse"
    | "America/Winnipeg"
    | "America/Yakutat"
    | "America/Yellowknife"
    | "Antarctica/Casey"
    | "Antarctica/Davis"
    | "Antarctica/DumontDUrville"
    | "Antarctica/Macquarie"
    | "Antarctica/Mawson"
    | "Antarctica/McMurdo"
    | "Antarctica/Palmer"
    | "Antarctica/Rothera"
    | "Antarctica/South_Pole"
    | "Antarctica/Syowa"
    | "Antarctica/Troll"
    | "Antarctica/Vostok"
    | "Arctic/Longyearbyen"
    | "Asia/Aden"
    | "Asia/Almaty"
    | "Asia/Amman"
    | "Asia/Anadyr"
    | "Asia/Aqtau"
    | "Asia/Aqtobe"
    | "Asia/Ashgabat"
    | "Asia/Ashkhabad"
    | "Asia/Atyrau"
    | "Asia/Baghdad"
    | "Asia/Bahrain"
    | "Asia/Baku"
    | "Asia/Bangkok"
    | "Asia/Barnaul"
    | "Asia/Beirut"
    | "Asia/Bishkek"
    | "Asia/Brunei"
    | "Asia/Calcutta"
    | "Asia/Chita"
    | "Asia/Choibalsan"
    | "Asia/Chongqing"
    | "Asia/Chungking"
    | "Asia/Colombo"
    | "Asia/Dacca"
    | "Asia/Damascus"
    | "Asia/Dhaka"
    | "Asia/Dili"
    | "Asia/Dubai"
    | "Asia/Dushanbe"
    | "Asia/Famagusta"
    | "Asia/Gaza"
    | "Asia/Harbin"
    | "Asia/Hebron"
    | "Asia/Ho_Chi_Minh"
    | "Asia/Hong_Kong"
    | "Asia/Hovd"
    | "Asia/Irkutsk"
    | "Asia/Istanbul"
    | "Asia/Jakarta"
    | "Asia/Jayapura"
    | "Asia/Jerusalem"
    | "Asia/Kabul"
    | "Asia/Kamchatka"
    | "Asia/Karachi"
    | "Asia/Kashgar"
    | "Asia/Kathmandu"
    | "Asia/Katmandu"
    | "Asia/Khandyga"
    | "Asia/Kolkata"
    | "Asia/Krasnoyarsk"
    | "Asia/Kuala_Lumpur"
    | "Asia/Kuching"
    | "Asia/Kuwait"
    | "Asia/Macao"
    | "Asia/Macau"
    | "Asia/Magadan"
    | "Asia/Makassar"
    | "Asia/Manila"
    | "Asia/Muscat"
    | "Asia/Nicosia"
    | "Asia/Novokuznetsk"
    | "Asia/Novosibirsk"
    | "Asia/Omsk"
    | "Asia/Oral"
    | "Asia/Phnom_Penh"
    | "Asia/Pontianak"
    | "Asia/Pyongyang"
    | "Asia/Qatar"
    | "Asia/Qostanay"
    | "Asia/Qyzylorda"
    | "Asia/Rangoon"
    | "Asia/Riyadh"
    | "Asia/Saigon"
    | "Asia/Sakhalin"
    | "Asia/Samarkand"
    | "Asia/Seoul"
    | "Asia/Shanghai"
    | "Asia/Singapore"
    | "Asia/Srednekolymsk"
    | "Asia/Taipei"
    | "Asia/Tashkent"
    | "Asia/Tbilisi"
    | "Asia/Tehran"
    | "Asia/Tel_Aviv"
    | "Asia/Thimbu"
    | "Asia/Thimphu"
    | "Asia/Tokyo"
    | "Asia/Tomsk"
    | "Asia/Ujung_Pandang"
    | "Asia/Ulaanbaatar"
    | "Asia/Ulan_Bator"
    | "Asia/Urumqi"
    | "Asia/Ust-Nera"
    | "Asia/Vientiane"
    | "Asia/Vladivostok"
    | "Asia/Yakutsk"
    | "Asia/Yangon"
    | "Asia/Yekaterinburg"
    | "Asia/Yerevan"
    | "Atlantic/Azores"
    | "Atlantic/Bermuda"
    | "Atlantic/Canary"
    | "Atlantic/Cape_Verde"
    | "Atlantic/Faeroe"
    | "Atlantic/Faroe"
    | "Atlantic/Jan_Mayen"
    | "Atlantic/Madeira"
    | "Atlantic/Reykjavik"
    | "Atlantic/South_Georgia"
    | "Atlantic/St_Helena"
    | "Atlantic/Stanley"
    | "Australia/ACT"
    | "Australia/Adelaide"
    | "Australia/Brisbane"
    | "Australia/Broken_Hill"
    | "Australia/Canberra"
    | "Australia/Currie"
    | "Australia/Darwin"
    | "Australia/Eucla"
    | "Australia/Hobart"
    | "Australia/LHI"
    | "Australia/Lindeman"
    | "Australia/Lord_Howe"
    | "Australia/Melbourne"
    | "Australia/NSW"
    | "Australia/North"
    | "Australia/Perth"
    | "Australia/Queensland"
    | "Australia/South"
    | "Australia/Sydney"
    | "Australia/Tasmania"
    | "Australia/Victoria"
    | "Australia/West"
    | "Australia/Yancowinna"
    | "Brazil/Acre"
    | "Brazil/DeNoronha"
    | "Brazil/East"
    | "Brazil/West"
    | "CET"
    | "CST6CDT"
    | "Canada/Atlantic"
    | "Canada/Central"
    | "Canada/Eastern"
    | "Canada/Mountain"
    | "Canada/Newfoundland"
    | "Canada/Pacific"
    | "Canada/Saskatchewan"
    | "Canada/Yukon"
    | "Chile/Continental"
    | "Chile/EasterIsland"
    | "Cuba"
    | "EET"
    | "EST"
    | "EST5EDT"
    | "Egypt"
    | "Eire"
    | "Etc/GMT"
    | "Etc/GMT+0"
    | "Etc/GMT+1"
    | "Etc/GMT+10"
    | "Etc/GMT+11"
    | "Etc/GMT+12"
    | "Etc/GMT+2"
    | "Etc/GMT+3"
    | "Etc/GMT+4"
    | "Etc/GMT+5"
    | "Etc/GMT+6"
    | "Etc/GMT+7"
    | "Etc/GMT+8"
    | "Etc/GMT+9"
    | "Etc/GMT-0"
    | "Etc/GMT-1"
    | "Etc/GMT-10"
    | "Etc/GMT-11"
    | "Etc/GMT-12"
    | "Etc/GMT-13"
    | "Etc/GMT-14"
    | "Etc/GMT-2"
    | "Etc/GMT-3"
    | "Etc/GMT-4"
    | "Etc/GMT-5"
    | "Etc/GMT-6"
    | "Etc/GMT-7"
    | "Etc/GMT-8"
    | "Etc/GMT-9"
    | "Etc/GMT0"
    | "Etc/Greenwich"
    | "Etc/UCT"
    | "Etc/UTC"
    | "Etc/Universal"
    | "Etc/Zulu"
    | "Europe/Amsterdam"
    | "Europe/Andorra"
    | "Europe/Astrakhan"
    | "Europe/Athens"
    | "Europe/Belfast"
    | "Europe/Belgrade"
    | "Europe/Berlin"
    | "Europe/Bratislava"
    | "Europe/Brussels"
    | "Europe/Bucharest"
    | "Europe/Budapest"
    | "Europe/Busingen"
    | "Europe/Chisinau"
    | "Europe/Copenhagen"
    | "Europe/Dublin"
    | "Europe/Gibraltar"
    | "Europe/Guernsey"
    | "Europe/Helsinki"
    | "Europe/Isle_of_Man"
    | "Europe/Istanbul"
    | "Europe/Jersey"
    | "Europe/Kaliningrad"
    | "Europe/Kiev"
    | "Europe/Kirov"
    | "Europe/Kyiv"
    | "Europe/Lisbon"
    | "Europe/Ljubljana"
    | "Europe/London"
    | "Europe/Luxembourg"
    | "Europe/Madrid"
    | "Europe/Malta"
    | "Europe/Mariehamn"
    | "Europe/Minsk"
    | "Europe/Monaco"
    | "Europe/Moscow"
    | "Europe/Nicosia"
    | "Europe/Oslo"
    | "Europe/Paris"
    | "Europe/Podgorica"
    | "Europe/Prague"
    | "Europe/Riga"
    | "Europe/Rome"
    | "Europe/Samara"
    | "Europe/San_Marino"
    | "Europe/Sarajevo"
    | "Europe/Saratov"
    | "Europe/Simferopol"
    | "Europe/Skopje"
    | "Europe/Sofia"
    | "Europe/Stockholm"
    | "Europe/Tallinn"
    | "Europe/Tirane"
    | "Europe/Tiraspol"
    | "Europe/Ulyanovsk"
    | "Europe/Uzhgorod"
    | "Europe/Vaduz"
    | "Europe/Vatican"
    | "Europe/Vienna"
    | "Europe/Vilnius"
    | "Europe/Volgograd"
    | "Europe/Warsaw"
    | "Europe/Zagreb"
    | "Europe/Zaporozhye"
    | "Europe/Zurich"
    | "GB"
    | "GB-Eire"
    | "GMT"
    | "GMT+0"
    | "GMT-0"
    | "GMT0"
    | "Greenwich"
    | "HST"
    | "Hongkong"
    | "Iceland"
    | "Indian/Antananarivo"
    | "Indian/Chagos"
    | "Indian/Christmas"
    | "Indian/Cocos"
    | "Indian/Comoro"
    | "Indian/Kerguelen"
    | "Indian/Mahe"
    | "Indian/Maldives"
    | "Indian/Mauritius"
    | "Indian/Mayotte"
    | "Indian/Reunion"
    | "Iran"
    | "Israel"
    | "Jamaica"
    | "Japan"
    | "Kwajalein"
    | "Libya"
    | "MET"
    | "MST"
    | "MST7MDT"
    | "Mexico/BajaNorte"
    | "Mexico/BajaSur"
    | "Mexico/General"
    | "NZ"
    | "NZ-CHAT"
    | "Navajo"
    | "PRC"
    | "PST8PDT"
    | "Pacific/Apia"
    | "Pacific/Auckland"
    | "Pacific/Bougainville"
    | "Pacific/Chatham"
    | "Pacific/Chuuk"
    | "Pacific/Easter"
    | "Pacific/Efate"
    | "Pacific/Enderbury"
    | "Pacific/Fakaofo"
    | "Pacific/Fiji"
    | "Pacific/Funafuti"
    | "Pacific/Galapagos"
    | "Pacific/Gambier"
    | "Pacific/Guadalcanal"
    | "Pacific/Guam"
    | "Pacific/Honolulu"
    | "Pacific/Johnston"
    | "Pacific/Kanton"
    | "Pacific/Kiritimati"
    | "Pacific/Kosrae"
    | "Pacific/Kwajalein"
    | "Pacific/Majuro"
    | "Pacific/Marquesas"
    | "Pacific/Midway"
    | "Pacific/Nauru"
    | "Pacific/Niue"
    | "Pacific/Norfolk"
    | "Pacific/Noumea"
    | "Pacific/Pago_Pago"
    | "Pacific/Palau"
    | "Pacific/Pitcairn"
    | "Pacific/Pohnpei"
    | "Pacific/Ponape"
    | "Pacific/Port_Moresby"
    | "Pacific/Rarotonga"
    | "Pacific/Saipan"
    | "Pacific/Samoa"
    | "Pacific/Tahiti"
    | "Pacific/Tarawa"
    | "Pacific/Tongatapu"
    | "Pacific/Truk"
    | "Pacific/Wake"
    | "Pacific/Wallis"
    | "Pacific/Yap"
    | "Poland"
    | "Portugal"
    | "ROC"
    | "ROK"
    | "Singapore"
    | "Turkey"
    | "UCT"
    | "US/Alaska"
    | "US/Aleutian"
    | "US/Arizona"
    | "US/Central"
    | "US/East-Indiana"
    | "US/Eastern"
    | "US/Hawaii"
    | "US/Indiana-Starke"
    | "US/Michigan"
    | "US/Mountain"
    | "US/Pacific"
    | "US/Pacific-New"
    | "US/Samoa"
    | "UTC"
    | "Universal"
    | "W-SU"
    | "WET"
    | "Zulu";
type DateResponse = {
    start: string;
    end: string | null;
    time_zone: TimeZoneRequest | null;
};
type StringRequest = string;
type TextRequest = string;
type StringFormulaPropertyResponse = {
    type: "string";
    string: string | null;
};
type DateFormulaPropertyResponse = {
    type: "date";
    date: DateResponse | null;
};
type NumberFormulaPropertyResponse = {
    type: "number";
    number: number | null;
};
type BooleanFormulaPropertyResponse = {
    type: "boolean";
    boolean: boolean | null;
};
type FormulaPropertyResponse =
    | StringFormulaPropertyResponse
    | DateFormulaPropertyResponse
    | NumberFormulaPropertyResponse
    | BooleanFormulaPropertyResponse;
type VerificationPropertyUnverifiedResponse = {
    state: "unverified";
    date: null;
    verified_by: null;
};
type VerificationPropertyResponse = {
    state: "verified" | "expired";
    date: DateResponse | null;
    verified_by:
        | {
              id: IdRequest;
          }
        | null
        | {
              person: {
                  email?: string;
              };
              id: IdRequest;
              type?: "person";
              name?: string | null;
              avatar_url?: string | null;
              object?: "user";
          }
        | null
        | {
              bot:
                  | EmptyObject
                  | {
                        owner:
                            | {
                                  type: "user";
                                  user:
                                      | {
                                            type: "person";
                                            person: {
                                                email: string;
                                            };
                                            name: string | null;
                                            avatar_url: string | null;
                                            id: IdRequest;
                                            object: "user";
                                        }
                                      | PartialUserObjectResponse;
                              }
                            | {
                                  type: "workspace";
                                  workspace: true;
                              };
                        workspace_name: string | null;
                    };
              id: IdRequest;
              type?: "bot";
              name?: string | null;
              avatar_url?: string | null;
              object?: "user";
          }
        | null;
};
type AnnotationResponse = {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color:
        | "default"
        | "gray"
        | "brown"
        | "orange"
        | "yellow"
        | "green"
        | "blue"
        | "purple"
        | "pink"
        | "red"
        | "gray_background"
        | "brown_background"
        | "orange_background"
        | "yellow_background"
        | "green_background"
        | "blue_background"
        | "purple_background"
        | "pink_background"
        | "red_background";
};
export type TextRichTextItemResponse = {
    type: "text";
    text: {
        content: string;
        link: {
            url: TextRequest;
        } | null;
    };
    annotations: AnnotationResponse;
    plain_text: string;
    href: string | null;
};
type LinkPreviewMentionResponse = {
    url: TextRequest;
};
type TemplateMentionDateTemplateMentionResponse = {
    type: "template_mention_date";
    template_mention_date: "today" | "now";
};
type TemplateMentionUserTemplateMentionResponse = {
    type: "template_mention_user";
    template_mention_user: "me";
};
type TemplateMentionResponse =
    | TemplateMentionDateTemplateMentionResponse
    | TemplateMentionUserTemplateMentionResponse;
export type MentionRichTextItemResponse = {
    type: "mention";
    mention:
        | {
              type: "user";
              user: PartialUserObjectResponse | UserObjectResponse;
          }
        | {
              type: "date";
              date: DateResponse;
          }
        | {
              type: "link_preview";
              link_preview: LinkPreviewMentionResponse;
          }
        | {
              type: "template_mention";
              template_mention: TemplateMentionResponse;
          }
        | {
              type: "page";
              page: {
                  id: IdRequest;
              };
          }
        | {
              type: "database";
              database: {
                  id: IdRequest;
              };
          };
    annotations: AnnotationResponse;
    plain_text: string;
    href: string | null;
};
export type EquationRichTextItemResponse = {
    type: "equation";
    equation: {
        expression: TextRequest;
    };
    annotations: AnnotationResponse;
    plain_text: string;
    href: string | null;
};
export type RichTextItemResponse =
    | TextRichTextItemResponse
    | MentionRichTextItemResponse
    | EquationRichTextItemResponse;
type RollupFunction =
    | "count"
    | "count_values"
    | "empty"
    | "not_empty"
    | "unique"
    | "show_unique"
    | "percent_empty"
    | "percent_not_empty"
    | "sum"
    | "average"
    | "median"
    | "min"
    | "max"
    | "range"
    | "earliest_date"
    | "latest_date"
    | "date_range"
    | "checked"
    | "unchecked"
    | "percent_checked"
    | "percent_unchecked"
    | "count_per_group"
    | "percent_per_group"
    | "show_original";
type EmojiRequest =
    | "😀"
    | "😃"
    | "😄"
    | "😁"
    | "😆"
    | "😅"
    | "🤣"
    | "😂"
    | "🙂"
    | "🙃"
    | "🫠"
    | "😉"
    | "😊"
    | "😇"
    | "🥰"
    | "😍"
    | "🤩"
    | "😘"
    | "😗"
    | "☺️"
    | "☺"
    | "😚"
    | "😙"
    | "🥲"
    | "😋"
    | "😛"
    | "😜"
    | "🤪"
    | "😝"
    | "🤑"
    | "🤗"
    | "🤭"
    | "🫢"
    | "🫣"
    | "🤫"
    | "🤔"
    | "🫡"
    | "🤐"
    | "🤨"
    | "😐"
    | "😑"
    | "😶"
    | "🫥"
    | "😶‍🌫️"
    | "😶‍🌫"
    | "😏"
    | "😒"
    | "🙄"
    | "😬"
    | "😮‍💨"
    | "🤥"
    | "😌"
    | "😔"
    | "😪"
    | "🤤"
    | "😴"
    | "😷"
    | "🤒"
    | "🤕"
    | "🤢"
    | "🤮"
    | "🤧"
    | "🥵"
    | "🥶"
    | "🥴"
    | "😵"
    | "😵‍💫"
    | "🤯"
    | "🤠"
    | "🥳"
    | "🥸"
    | "😎"
    | "🤓"
    | "🧐"
    | "😕"
    | "🫤"
    | "😟"
    | "🙁"
    | "☹️"
    | "☹"
    | "😮"
    | "😯"
    | "😲"
    | "😳"
    | "🥺"
    | "🥹"
    | "😦"
    | "😧"
    | "😨"
    | "😰"
    | "😥"
    | "😢"
    | "😭"
    | "😱"
    | "😖"
    | "😣"
    | "😞"
    | "😓"
    | "😩"
    | "😫"
    | "🥱"
    | "😤"
    | "😡"
    | "😠"
    | "🤬"
    | "😈"
    | "👿"
    | "💀"
    | "☠️"
    | "☠"
    | "💩"
    | "🤡"
    | "👹"
    | "👺"
    | "👻"
    | "👽"
    | "👾"
    | "🤖"
    | "😺"
    | "😸"
    | "😹"
    | "😻"
    | "😼"
    | "😽"
    | "🙀"
    | "😿"
    | "😾"
    | "🙈"
    | "🙉"
    | "🙊"
    | "💋"
    | "💌"
    | "💘"
    | "💝"
    | "💖"
    | "💗"
    | "💓"
    | "💞"
    | "💕"
    | "💟"
    | "❣️"
    | "❣"
    | "💔"
    | "❤️‍🔥"
    | "❤‍🔥"
    | "❤️‍🩹"
    | "❤‍🩹"
    | "❤️"
    | "❤"
    | "🧡"
    | "💛"
    | "💚"
    | "💙"
    | "💜"
    | "🤎"
    | "🖤"
    | "🤍"
    | "💯"
    | "💢"
    | "💥"
    | "💫"
    | "💦"
    | "💨"
    | "🕳️"
    | "🕳"
    | "💣"
    | "💬"
    | "👁️‍🗨️"
    | "🗨️"
    | "🗨"
    | "🗯️"
    | "🗯"
    | "💭"
    | "💤"
    | "👋🏻"
    | "👋🏼"
    | "👋🏽"
    | "👋🏾"
    | "👋🏿"
    | "👋"
    | "🤚🏻"
    | "🤚🏼"
    | "🤚🏽"
    | "🤚🏾"
    | "🤚🏿"
    | "🤚"
    | "🖐🏻"
    | "🖐🏼"
    | "🖐🏽"
    | "🖐🏾"
    | "🖐🏿"
    | "🖐️"
    | "🖐"
    | "✋🏻"
    | "✋🏼"
    | "✋🏽"
    | "✋🏾"
    | "✋🏿"
    | "✋"
    | "🖖🏻"
    | "🖖🏼"
    | "🖖🏽"
    | "🖖🏾"
    | "🖖🏿"
    | "🖖"
    | "🫱🏻"
    | "🫱🏼"
    | "🫱🏽"
    | "🫱🏾"
    | "🫱🏿"
    | "🫱"
    | "🫲🏻"
    | "🫲🏼"
    | "🫲🏽"
    | "🫲🏾"
    | "🫲🏿"
    | "🫲"
    | "🫳🏻"
    | "🫳🏼"
    | "🫳🏽"
    | "🫳🏾"
    | "🫳🏿"
    | "🫳"
    | "🫴🏻"
    | "🫴🏼"
    | "🫴🏽"
    | "🫴🏾"
    | "🫴🏿"
    | "🫴"
    | "👌🏻"
    | "👌🏼"
    | "👌🏽"
    | "👌🏾"
    | "👌🏿"
    | "👌"
    | "🤌🏻"
    | "🤌🏼"
    | "🤌🏽"
    | "🤌🏾"
    | "🤌🏿"
    | "🤌"
    | "🤏🏻"
    | "🤏🏼"
    | "🤏🏽"
    | "🤏🏾"
    | "🤏🏿"
    | "🤏"
    | "✌🏻"
    | "✌🏼"
    | "✌🏽"
    | "✌🏾"
    | "✌🏿"
    | "✌️"
    | "✌"
    | "🤞🏻"
    | "🤞🏼"
    | "🤞🏽"
    | "🤞🏾"
    | "🤞🏿"
    | "🤞"
    | "🫰🏻"
    | "🫰🏼"
    | "🫰🏽"
    | "🫰🏾"
    | "🫰🏿"
    | "🫰"
    | "🤟🏻"
    | "🤟🏼"
    | "🤟🏽"
    | "🤟🏾"
    | "🤟🏿"
    | "🤟"
    | "🤘🏻"
    | "🤘🏼"
    | "🤘🏽"
    | "🤘🏾"
    | "🤘🏿"
    | "🤘"
    | "🤙🏻"
    | "🤙🏼"
    | "🤙🏽"
    | "🤙🏾"
    | "🤙🏿"
    | "🤙"
    | "👈🏻"
    | "👈🏼"
    | "👈🏽"
    | "👈🏾"
    | "👈🏿"
    | "👈"
    | "👉🏻"
    | "👉🏼"
    | "👉🏽"
    | "👉🏾"
    | "👉🏿"
    | "👉"
    | "👆🏻"
    | "👆🏼"
    | "👆🏽"
    | "👆🏾"
    | "👆🏿"
    | "👆"
    | "🖕🏻"
    | "🖕🏼"
    | "🖕🏽"
    | "🖕🏾"
    | "🖕🏿"
    | "🖕"
    | "👇🏻"
    | "👇🏼"
    | "👇🏽"
    | "👇🏾"
    | "👇🏿"
    | "👇"
    | "☝🏻"
    | "☝🏼"
    | "☝🏽"
    | "☝🏾"
    | "☝🏿"
    | "☝️"
    | "☝"
    | "🫵🏻"
    | "🫵🏼"
    | "🫵🏽"
    | "🫵🏾"
    | "🫵🏿"
    | "🫵"
    | "👍🏻"
    | "👍🏼"
    | "👍🏽"
    | "👍🏾"
    | "👍🏿"
    | "👍"
    | "👎🏻"
    | "👎🏼"
    | "👎🏽"
    | "👎🏾"
    | "👎🏿"
    | "👎"
    | "✊🏻"
    | "✊🏼"
    | "✊🏽"
    | "✊🏾"
    | "✊🏿"
    | "✊"
    | "👊🏻"
    | "👊🏼"
    | "👊🏽"
    | "👊🏾"
    | "👊🏿"
    | "👊"
    | "🤛🏻"
    | "🤛🏼"
    | "🤛🏽"
    | "🤛🏾"
    | "🤛🏿"
    | "🤛"
    | "🤜🏻"
    | "🤜🏼"
    | "🤜🏽"
    | "🤜🏾"
    | "🤜🏿"
    | "🤜"
    | "👏🏻"
    | "👏🏼"
    | "👏🏽"
    | "👏🏾"
    | "👏🏿"
    | "👏"
    | "🙌🏻"
    | "🙌🏼"
    | "🙌🏽"
    | "🙌🏾"
    | "🙌🏿"
    | "🙌"
    | "🫶🏻"
    | "🫶🏼"
    | "🫶🏽"
    | "🫶🏾"
    | "🫶🏿"
    | "🫶"
    | "👐🏻"
    | "👐🏼"
    | "👐🏽"
    | "👐🏾"
    | "👐🏿"
    | "👐"
    | "🤲🏻"
    | "🤲🏼"
    | "🤲🏽"
    | "🤲🏾"
    | "🤲🏿"
    | "🤲"
    | "🤝🏻"
    | "🤝🏼"
    | "🤝🏽"
    | "🤝🏾"
    | "🤝🏿"
    | "🫱🏻‍🫲🏼"
    | "🫱🏻‍🫲🏽"
    | "🫱🏻‍🫲🏾"
    | "🫱🏻‍🫲🏿"
    | "🫱🏼‍🫲🏻"
    | "🫱🏼‍🫲🏽"
    | "🫱🏼‍🫲🏾"
    | "🫱🏼‍🫲🏿"
    | "🫱🏽‍🫲🏻"
    | "🫱🏽‍🫲🏼"
    | "🫱🏽‍🫲🏾"
    | "🫱🏽‍🫲🏿"
    | "🫱🏾‍🫲🏻"
    | "🫱🏾‍🫲🏼"
    | "🫱🏾‍🫲🏽"
    | "🫱🏾‍🫲🏿"
    | "🫱🏿‍🫲🏻"
    | "🫱🏿‍🫲🏼"
    | "🫱🏿‍🫲🏽"
    | "🫱🏿‍🫲🏾"
    | "🤝"
    | "🙏🏻"
    | "🙏🏼"
    | "🙏🏽"
    | "🙏🏾"
    | "🙏🏿"
    | "🙏"
    | "✍🏻"
    | "✍🏼"
    | "✍🏽"
    | "✍🏾"
    | "✍🏿"
    | "✍️"
    | "✍"
    | "💅🏻"
    | "💅🏼"
    | "💅🏽"
    | "💅🏾"
    | "💅🏿"
    | "💅"
    | "🤳🏻"
    | "🤳🏼"
    | "🤳🏽"
    | "🤳🏾"
    | "🤳🏿"
    | "🤳"
    | "💪🏻"
    | "💪🏼"
    | "💪🏽"
    | "💪🏾"
    | "💪🏿"
    | "💪"
    | "🦾"
    | "🦿"
    | "🦵🏻"
    | "🦵🏼"
    | "🦵🏽"
    | "🦵🏾"
    | "🦵🏿"
    | "🦵"
    | "🦶🏻"
    | "🦶🏼"
    | "🦶🏽"
    | "🦶🏾"
    | "🦶🏿"
    | "🦶"
    | "👂🏻"
    | "👂🏼"
    | "👂🏽"
    | "👂🏾"
    | "👂🏿"
    | "👂"
    | "🦻🏻"
    | "🦻🏼"
    | "🦻🏽"
    | "🦻🏾"
    | "🦻🏿"
    | "🦻"
    | "👃🏻"
    | "👃🏼"
    | "👃🏽"
    | "👃🏾"
    | "👃🏿"
    | "👃"
    | "🧠"
    | "🫀"
    | "🫁"
    | "🦷"
    | "🦴"
    | "👀"
    | "👁️"
    | "👁"
    | "👅"
    | "👄"
    | "🫦"
    | "👶🏻"
    | "👶🏼"
    | "👶🏽"
    | "👶🏾"
    | "👶🏿"
    | "👶"
    | "🧒🏻"
    | "🧒🏼"
    | "🧒🏽"
    | "🧒🏾"
    | "🧒🏿"
    | "🧒"
    | "👦🏻"
    | "👦🏼"
    | "👦🏽"
    | "👦🏾"
    | "👦🏿"
    | "👦"
    | "👧🏻"
    | "👧🏼"
    | "👧🏽"
    | "👧🏾"
    | "👧🏿"
    | "👧"
    | "🧑🏻"
    | "🧑🏼"
    | "🧑🏽"
    | "🧑🏾"
    | "🧑🏿"
    | "🧑"
    | "👱🏻"
    | "👱🏼"
    | "👱🏽"
    | "👱🏾"
    | "👱🏿"
    | "👱"
    | "👨🏻"
    | "👨🏼"
    | "👨🏽"
    | "👨🏾"
    | "👨🏿"
    | "👨"
    | "🧔🏻"
    | "🧔🏼"
    | "🧔🏽"
    | "🧔🏾"
    | "🧔🏿"
    | "🧔"
    | "🧔🏻‍♂️"
    | "🧔🏼‍♂️"
    | "🧔🏽‍♂️"
    | "🧔🏾‍♂️"
    | "🧔🏿‍♂️"
    | "🧔‍♂️"
    | "🧔‍♂"
    | "🧔🏻‍♀️"
    | "🧔🏼‍♀️"
    | "🧔🏽‍♀️"
    | "🧔🏾‍♀️"
    | "🧔🏿‍♀️"
    | "🧔‍♀️"
    | "🧔‍♀"
    | "👨🏻‍🦰"
    | "👨🏼‍🦰"
    | "👨🏽‍🦰"
    | "👨🏾‍🦰"
    | "👨🏿‍🦰"
    | "👨‍🦰"
    | "👨🏻‍🦱"
    | "👨🏼‍🦱"
    | "👨🏽‍🦱"
    | "👨🏾‍🦱"
    | "👨🏿‍🦱"
    | "👨‍🦱"
    | "👨🏻‍🦳"
    | "👨🏼‍🦳"
    | "👨🏽‍🦳"
    | "👨🏾‍🦳"
    | "👨🏿‍🦳"
    | "👨‍🦳"
    | "👨🏻‍🦲"
    | "👨🏼‍🦲"
    | "👨🏽‍🦲"
    | "👨🏾‍🦲"
    | "👨🏿‍🦲"
    | "👨‍🦲"
    | "👩🏻"
    | "👩🏼"
    | "👩🏽"
    | "👩🏾"
    | "👩🏿"
    | "👩"
    | "👩🏻‍🦰"
    | "👩🏼‍🦰"
    | "👩🏽‍🦰"
    | "👩🏾‍🦰"
    | "👩🏿‍🦰"
    | "👩‍🦰"
    | "🧑🏻‍🦰"
    | "🧑🏼‍🦰"
    | "🧑🏽‍🦰"
    | "🧑🏾‍🦰"
    | "🧑🏿‍🦰"
    | "🧑‍🦰"
    | "👩🏻‍🦱"
    | "👩🏼‍🦱"
    | "👩🏽‍🦱"
    | "👩🏾‍🦱"
    | "👩🏿‍🦱"
    | "👩‍🦱"
    | "🧑🏻‍🦱"
    | "🧑🏼‍🦱"
    | "🧑🏽‍🦱"
    | "🧑🏾‍🦱"
    | "🧑🏿‍🦱"
    | "🧑‍🦱"
    | "👩🏻‍🦳"
    | "👩🏼‍🦳"
    | "👩🏽‍🦳"
    | "👩🏾‍🦳"
    | "👩🏿‍🦳"
    | "👩‍🦳"
    | "🧑🏻‍🦳"
    | "🧑🏼‍🦳"
    | "🧑🏽‍🦳"
    | "🧑🏾‍🦳"
    | "🧑🏿‍🦳"
    | "🧑‍🦳"
    | "👩🏻‍🦲"
    | "👩🏼‍🦲"
    | "👩🏽‍🦲"
    | "👩🏾‍🦲"
    | "👩🏿‍🦲"
    | "👩‍🦲"
    | "🧑🏻‍🦲"
    | "🧑🏼‍🦲"
    | "🧑🏽‍🦲"
    | "🧑🏾‍🦲"
    | "🧑🏿‍🦲"
    | "🧑‍🦲"
    | "👱🏻‍♀️"
    | "👱🏼‍♀️"
    | "👱🏽‍♀️"
    | "👱🏾‍♀️"
    | "👱🏿‍♀️"
    | "👱‍♀️"
    | "👱‍♀"
    | "👱🏻‍♂️"
    | "👱🏼‍♂️"
    | "👱🏽‍♂️"
    | "👱🏾‍♂️"
    | "👱🏿‍♂️"
    | "👱‍♂️"
    | "👱‍♂"
    | "🧓🏻"
    | "🧓🏼"
    | "🧓🏽"
    | "🧓🏾"
    | "🧓🏿"
    | "🧓"
    | "👴🏻"
    | "👴🏼"
    | "👴🏽"
    | "👴🏾"
    | "👴🏿"
    | "👴"
    | "👵🏻"
    | "👵🏼"
    | "👵🏽"
    | "👵🏾"
    | "👵🏿"
    | "👵"
    | "🙍🏻"
    | "🙍🏼"
    | "🙍🏽"
    | "🙍🏾"
    | "🙍🏿"
    | "🙍"
    | "🙍🏻‍♂️"
    | "🙍🏼‍♂️"
    | "🙍🏽‍♂️"
    | "🙍🏾‍♂️"
    | "🙍🏿‍♂️"
    | "🙍‍♂️"
    | "🙍‍♂"
    | "🙍🏻‍♀️"
    | "🙍🏼‍♀️"
    | "🙍🏽‍♀️"
    | "🙍🏾‍♀️"
    | "🙍🏿‍♀️"
    | "🙍‍♀️"
    | "🙍‍♀"
    | "🙎🏻"
    | "🙎🏼"
    | "🙎🏽"
    | "🙎🏾"
    | "🙎🏿"
    | "🙎"
    | "🙎🏻‍♂️"
    | "🙎🏼‍♂️"
    | "🙎🏽‍♂️"
    | "🙎🏾‍♂️"
    | "🙎🏿‍♂️"
    | "🙎‍♂️"
    | "🙎‍♂"
    | "🙎🏻‍♀️"
    | "🙎🏼‍♀️"
    | "🙎🏽‍♀️"
    | "🙎🏾‍♀️"
    | "🙎🏿‍♀️"
    | "🙎‍♀️"
    | "🙎‍♀"
    | "🙅🏻"
    | "🙅🏼"
    | "🙅🏽"
    | "🙅🏾"
    | "🙅🏿"
    | "🙅"
    | "🙅🏻‍♂️"
    | "🙅🏼‍♂️"
    | "🙅🏽‍♂️"
    | "🙅🏾‍♂️"
    | "🙅🏿‍♂️"
    | "🙅‍♂️"
    | "🙅‍♂"
    | "🙅🏻‍♀️"
    | "🙅🏼‍♀️"
    | "🙅🏽‍♀️"
    | "🙅🏾‍♀️"
    | "🙅🏿‍♀️"
    | "🙅‍♀️"
    | "🙅‍♀"
    | "🙆🏻"
    | "🙆🏼"
    | "🙆🏽"
    | "🙆🏾"
    | "🙆🏿"
    | "🙆"
    | "🙆🏻‍♂️"
    | "🙆🏼‍♂️"
    | "🙆🏽‍♂️"
    | "🙆🏾‍♂️"
    | "🙆🏿‍♂️"
    | "🙆‍♂️"
    | "🙆‍♂"
    | "🙆🏻‍♀️"
    | "🙆🏼‍♀️"
    | "🙆🏽‍♀️"
    | "🙆🏾‍♀️"
    | "🙆🏿‍♀️"
    | "🙆‍♀️"
    | "🙆‍♀"
    | "💁🏻"
    | "💁🏼"
    | "💁🏽"
    | "💁🏾"
    | "💁🏿"
    | "💁"
    | "💁🏻‍♂️"
    | "💁🏼‍♂️"
    | "💁🏽‍♂️"
    | "💁🏾‍♂️"
    | "💁🏿‍♂️"
    | "💁‍♂️"
    | "💁‍♂"
    | "💁🏻‍♀️"
    | "💁🏼‍♀️"
    | "💁🏽‍♀️"
    | "💁🏾‍♀️"
    | "💁🏿‍♀️"
    | "💁‍♀️"
    | "💁‍♀"
    | "🙋🏻"
    | "🙋🏼"
    | "🙋🏽"
    | "🙋🏾"
    | "🙋🏿"
    | "🙋"
    | "🙋🏻‍♂️"
    | "🙋🏼‍♂️"
    | "🙋🏽‍♂️"
    | "🙋🏾‍♂️"
    | "🙋🏿‍♂️"
    | "🙋‍♂️"
    | "🙋‍♂"
    | "🙋🏻‍♀️"
    | "🙋🏼‍♀️"
    | "🙋🏽‍♀️"
    | "🙋🏾‍♀️"
    | "🙋🏿‍♀️"
    | "🙋‍♀️"
    | "🙋‍♀"
    | "🧏🏻"
    | "🧏🏼"
    | "🧏🏽"
    | "🧏🏾"
    | "🧏🏿"
    | "🧏"
    | "🧏🏻‍♂️"
    | "🧏🏼‍♂️"
    | "🧏🏽‍♂️"
    | "🧏🏾‍♂️"
    | "🧏🏿‍♂️"
    | "🧏‍♂️"
    | "🧏‍♂"
    | "🧏🏻‍♀️"
    | "🧏🏼‍♀️"
    | "🧏🏽‍♀️"
    | "🧏🏾‍♀️"
    | "🧏🏿‍♀️"
    | "🧏‍♀️"
    | "🧏‍♀"
    | "🙇🏻"
    | "🙇🏼"
    | "🙇🏽"
    | "🙇🏾"
    | "🙇🏿"
    | "🙇"
    | "🙇🏻‍♂️"
    | "🙇🏼‍♂️"
    | "🙇🏽‍♂️"
    | "🙇🏾‍♂️"
    | "🙇🏿‍♂️"
    | "🙇‍♂️"
    | "🙇‍♂"
    | "🙇🏻‍♀️"
    | "🙇🏼‍♀️"
    | "🙇🏽‍♀️"
    | "🙇🏾‍♀️"
    | "🙇🏿‍♀️"
    | "🙇‍♀️"
    | "🙇‍♀"
    | "🤦🏻"
    | "🤦🏼"
    | "🤦🏽"
    | "🤦🏾"
    | "🤦🏿"
    | "🤦"
    | "🤦🏻‍♂️"
    | "🤦🏼‍♂️"
    | "🤦🏽‍♂️"
    | "🤦🏾‍♂️"
    | "🤦🏿‍♂️"
    | "🤦‍♂️"
    | "🤦‍♂"
    | "🤦🏻‍♀️"
    | "🤦🏼‍♀️"
    | "🤦🏽‍♀️"
    | "🤦🏾‍♀️"
    | "🤦🏿‍♀️"
    | "🤦‍♀️"
    | "🤦‍♀"
    | "🤷🏻"
    | "🤷🏼"
    | "🤷🏽"
    | "🤷🏾"
    | "🤷🏿"
    | "🤷"
    | "🤷🏻‍♂️"
    | "🤷🏼‍♂️"
    | "🤷🏽‍♂️"
    | "🤷🏾‍♂️"
    | "🤷🏿‍♂️"
    | "🤷‍♂️"
    | "🤷‍♂"
    | "🤷🏻‍♀️"
    | "🤷🏼‍♀️"
    | "🤷🏽‍♀️"
    | "🤷🏾‍♀️"
    | "🤷🏿‍♀️"
    | "🤷‍♀️"
    | "🤷‍♀"
    | "🧑🏻‍⚕️"
    | "🧑🏼‍⚕️"
    | "🧑🏽‍⚕️"
    | "🧑🏾‍⚕️"
    | "🧑🏿‍⚕️"
    | "🧑‍⚕️"
    | "🧑‍⚕"
    | "👨🏻‍⚕️"
    | "👨🏼‍⚕️"
    | "👨🏽‍⚕️"
    | "👨🏾‍⚕️"
    | "👨🏿‍⚕️"
    | "👨‍⚕️"
    | "👨‍⚕"
    | "👩🏻‍⚕️"
    | "👩🏼‍⚕️"
    | "👩🏽‍⚕️"
    | "👩🏾‍⚕️"
    | "👩🏿‍⚕️"
    | "👩‍⚕️"
    | "👩‍⚕"
    | "🧑🏻‍🎓"
    | "🧑🏼‍🎓"
    | "🧑🏽‍🎓"
    | "🧑🏾‍🎓"
    | "🧑🏿‍🎓"
    | "🧑‍🎓"
    | "👨🏻‍🎓"
    | "👨🏼‍🎓"
    | "👨🏽‍🎓"
    | "👨🏾‍🎓"
    | "👨🏿‍🎓"
    | "👨‍🎓"
    | "👩🏻‍🎓"
    | "👩🏼‍🎓"
    | "👩🏽‍🎓"
    | "👩🏾‍🎓"
    | "👩🏿‍🎓"
    | "👩‍🎓"
    | "🧑🏻‍🏫"
    | "🧑🏼‍🏫"
    | "🧑🏽‍🏫"
    | "🧑🏾‍🏫"
    | "🧑🏿‍🏫"
    | "🧑‍🏫"
    | "👨🏻‍🏫"
    | "👨🏼‍🏫"
    | "👨🏽‍🏫"
    | "👨🏾‍🏫"
    | "👨🏿‍🏫"
    | "👨‍🏫"
    | "👩🏻‍🏫"
    | "👩🏼‍🏫"
    | "👩🏽‍🏫"
    | "👩🏾‍🏫"
    | "👩🏿‍🏫"
    | "👩‍🏫"
    | "🧑🏻‍⚖️"
    | "🧑🏼‍⚖️"
    | "🧑🏽‍⚖️"
    | "🧑🏾‍⚖️"
    | "🧑🏿‍⚖️"
    | "🧑‍⚖️"
    | "🧑‍⚖"
    | "👨🏻‍⚖️"
    | "👨🏼‍⚖️"
    | "👨🏽‍⚖️"
    | "👨🏾‍⚖️"
    | "👨🏿‍⚖️"
    | "👨‍⚖️"
    | "👨‍⚖"
    | "👩🏻‍⚖️"
    | "👩🏼‍⚖️"
    | "👩🏽‍⚖️"
    | "👩🏾‍⚖️"
    | "👩🏿‍⚖️"
    | "👩‍⚖️"
    | "👩‍⚖"
    | "🧑🏻‍🌾"
    | "🧑🏼‍🌾"
    | "🧑🏽‍🌾"
    | "🧑🏾‍🌾"
    | "🧑🏿‍🌾"
    | "🧑‍🌾"
    | "👨🏻‍🌾"
    | "👨🏼‍🌾"
    | "👨🏽‍🌾"
    | "👨🏾‍🌾"
    | "👨🏿‍🌾"
    | "👨‍🌾"
    | "👩🏻‍🌾"
    | "👩🏼‍🌾"
    | "👩🏽‍🌾"
    | "👩🏾‍🌾"
    | "👩🏿‍🌾"
    | "👩‍🌾"
    | "🧑🏻‍🍳"
    | "🧑🏼‍🍳"
    | "🧑🏽‍🍳"
    | "🧑🏾‍🍳"
    | "🧑🏿‍🍳"
    | "🧑‍🍳"
    | "👨🏻‍🍳"
    | "👨🏼‍🍳"
    | "👨🏽‍🍳"
    | "👨🏾‍🍳"
    | "👨🏿‍🍳"
    | "👨‍🍳"
    | "👩🏻‍🍳"
    | "👩🏼‍🍳"
    | "👩🏽‍🍳"
    | "👩🏾‍🍳"
    | "👩🏿‍🍳"
    | "👩‍🍳"
    | "🧑🏻‍🔧"
    | "🧑🏼‍🔧"
    | "🧑🏽‍🔧"
    | "🧑🏾‍🔧"
    | "🧑🏿‍🔧"
    | "🧑‍🔧"
    | "👨🏻‍🔧"
    | "👨🏼‍🔧"
    | "👨🏽‍🔧"
    | "👨🏾‍🔧"
    | "👨🏿‍🔧"
    | "👨‍🔧"
    | "👩🏻‍🔧"
    | "👩🏼‍🔧"
    | "👩🏽‍🔧"
    | "👩🏾‍🔧"
    | "👩🏿‍🔧"
    | "👩‍🔧"
    | "🧑🏻‍🏭"
    | "🧑🏼‍🏭"
    | "🧑🏽‍🏭"
    | "🧑🏾‍🏭"
    | "🧑🏿‍🏭"
    | "🧑‍🏭"
    | "👨🏻‍🏭"
    | "👨🏼‍🏭"
    | "👨🏽‍🏭"
    | "👨🏾‍🏭"
    | "👨🏿‍🏭"
    | "👨‍🏭"
    | "👩🏻‍🏭"
    | "👩🏼‍🏭"
    | "👩🏽‍🏭"
    | "👩🏾‍🏭"
    | "👩🏿‍🏭"
    | "👩‍🏭"
    | "🧑🏻‍💼"
    | "🧑🏼‍💼"
    | "🧑🏽‍💼"
    | "🧑🏾‍💼"
    | "🧑🏿‍💼"
    | "🧑‍💼"
    | "👨🏻‍💼"
    | "👨🏼‍💼"
    | "👨🏽‍💼"
    | "👨🏾‍💼"
    | "👨🏿‍💼"
    | "👨‍💼"
    | "👩🏻‍💼"
    | "👩🏼‍💼"
    | "👩🏽‍💼"
    | "👩🏾‍💼"
    | "👩🏿‍💼"
    | "👩‍💼"
    | "🧑🏻‍🔬"
    | "🧑🏼‍🔬"
    | "🧑🏽‍🔬"
    | "🧑🏾‍🔬"
    | "🧑🏿‍🔬"
    | "🧑‍🔬"
    | "👨🏻‍🔬"
    | "👨🏼‍🔬"
    | "👨🏽‍🔬"
    | "👨🏾‍🔬"
    | "👨🏿‍🔬"
    | "👨‍🔬"
    | "👩🏻‍🔬"
    | "👩🏼‍🔬"
    | "👩🏽‍🔬"
    | "👩🏾‍🔬"
    | "👩🏿‍🔬"
    | "👩‍🔬"
    | "🧑🏻‍💻"
    | "🧑🏼‍💻"
    | "🧑🏽‍💻"
    | "🧑🏾‍💻"
    | "🧑🏿‍💻"
    | "🧑‍💻"
    | "👨🏻‍💻"
    | "👨🏼‍💻"
    | "👨🏽‍💻"
    | "👨🏾‍💻"
    | "👨🏿‍💻"
    | "👨‍💻"
    | "👩🏻‍💻"
    | "👩🏼‍💻"
    | "👩🏽‍💻"
    | "👩🏾‍💻"
    | "👩🏿‍💻"
    | "👩‍💻"
    | "🧑🏻‍🎤"
    | "🧑🏼‍🎤"
    | "🧑🏽‍🎤"
    | "🧑🏾‍🎤"
    | "🧑🏿‍🎤"
    | "🧑‍🎤"
    | "👨🏻‍🎤"
    | "👨🏼‍🎤"
    | "👨🏽‍🎤"
    | "👨🏾‍🎤"
    | "👨🏿‍🎤"
    | "👨‍🎤"
    | "👩🏻‍🎤"
    | "👩🏼‍🎤"
    | "👩🏽‍🎤"
    | "👩🏾‍🎤"
    | "👩🏿‍🎤"
    | "👩‍🎤"
    | "🧑🏻‍🎨"
    | "🧑🏼‍🎨"
    | "🧑🏽‍🎨"
    | "🧑🏾‍🎨"
    | "🧑🏿‍🎨"
    | "🧑‍🎨"
    | "👨🏻‍🎨"
    | "👨🏼‍🎨"
    | "👨🏽‍🎨"
    | "👨🏾‍🎨"
    | "👨🏿‍🎨"
    | "👨‍🎨"
    | "👩🏻‍🎨"
    | "👩🏼‍🎨"
    | "👩🏽‍🎨"
    | "👩🏾‍🎨"
    | "👩🏿‍🎨"
    | "👩‍🎨"
    | "🧑🏻‍✈️"
    | "🧑🏼‍✈️"
    | "🧑🏽‍✈️"
    | "🧑🏾‍✈️"
    | "🧑🏿‍✈️"
    | "🧑‍✈️"
    | "🧑‍✈"
    | "👨🏻‍✈️"
    | "👨🏼‍✈️"
    | "👨🏽‍✈️"
    | "👨🏾‍✈️"
    | "👨🏿‍✈️"
    | "👨‍✈️"
    | "👨‍✈"
    | "👩🏻‍✈️"
    | "👩🏼‍✈️"
    | "👩🏽‍✈️"
    | "👩🏾‍✈️"
    | "👩🏿‍✈️"
    | "👩‍✈️"
    | "👩‍✈"
    | "🧑🏻‍🚀"
    | "🧑🏼‍🚀"
    | "🧑🏽‍🚀"
    | "🧑🏾‍🚀"
    | "🧑🏿‍🚀"
    | "🧑‍🚀"
    | "👨🏻‍🚀"
    | "👨🏼‍🚀"
    | "👨🏽‍🚀"
    | "👨🏾‍🚀"
    | "👨🏿‍🚀"
    | "👨‍🚀"
    | "👩🏻‍🚀"
    | "👩🏼‍🚀"
    | "👩🏽‍🚀"
    | "👩🏾‍🚀"
    | "👩🏿‍🚀"
    | "👩‍🚀"
    | "🧑🏻‍🚒"
    | "🧑🏼‍🚒"
    | "🧑🏽‍🚒"
    | "🧑🏾‍🚒"
    | "🧑🏿‍🚒"
    | "🧑‍🚒"
    | "👨🏻‍🚒"
    | "👨🏼‍🚒"
    | "👨🏽‍🚒"
    | "👨🏾‍🚒"
    | "👨🏿‍🚒"
    | "👨‍🚒"
    | "👩🏻‍🚒"
    | "👩🏼‍🚒"
    | "👩🏽‍🚒"
    | "👩🏾‍🚒"
    | "👩🏿‍🚒"
    | "👩‍🚒"
    | "👮🏻"
    | "👮🏼"
    | "👮🏽"
    | "👮🏾"
    | "👮🏿"
    | "👮"
    | "👮🏻‍♂️"
    | "👮🏼‍♂️"
    | "👮🏽‍♂️"
    | "👮🏾‍♂️"
    | "👮🏿‍♂️"
    | "👮‍♂️"
    | "👮‍♂"
    | "👮🏻‍♀️"
    | "👮🏼‍♀️"
    | "👮🏽‍♀️"
    | "👮🏾‍♀️"
    | "👮🏿‍♀️"
    | "👮‍♀️"
    | "👮‍♀"
    | "🕵🏻"
    | "🕵🏼"
    | "🕵🏽"
    | "🕵🏾"
    | "🕵🏿"
    | "🕵️"
    | "🕵"
    | "🕵🏻‍♂️"
    | "🕵🏼‍♂️"
    | "🕵🏽‍♂️"
    | "🕵🏾‍♂️"
    | "🕵🏿‍♂️"
    | "🕵️‍♂️"
    | "🕵🏻‍♀️"
    | "🕵🏼‍♀️"
    | "🕵🏽‍♀️"
    | "🕵🏾‍♀️"
    | "🕵🏿‍♀️"
    | "🕵️‍♀️"
    | "💂🏻"
    | "💂🏼"
    | "💂🏽"
    | "💂🏾"
    | "💂🏿"
    | "💂"
    | "💂🏻‍♂️"
    | "💂🏼‍♂️"
    | "💂🏽‍♂️"
    | "💂🏾‍♂️"
    | "💂🏿‍♂️"
    | "💂‍♂️"
    | "💂‍♂"
    | "💂🏻‍♀️"
    | "💂🏼‍♀️"
    | "💂🏽‍♀️"
    | "💂🏾‍♀️"
    | "💂🏿‍♀️"
    | "💂‍♀️"
    | "💂‍♀"
    | "🥷🏻"
    | "🥷🏼"
    | "🥷🏽"
    | "🥷🏾"
    | "🥷🏿"
    | "🥷"
    | "👷🏻"
    | "👷🏼"
    | "👷🏽"
    | "👷🏾"
    | "👷🏿"
    | "👷"
    | "👷🏻‍♂️"
    | "👷🏼‍♂️"
    | "👷🏽‍♂️"
    | "👷🏾‍♂️"
    | "👷🏿‍♂️"
    | "👷‍♂️"
    | "👷‍♂"
    | "👷🏻‍♀️"
    | "👷🏼‍♀️"
    | "👷🏽‍♀️"
    | "👷🏾‍♀️"
    | "👷🏿‍♀️"
    | "👷‍♀️"
    | "👷‍♀"
    | "🫅🏻"
    | "🫅🏼"
    | "🫅🏽"
    | "🫅🏾"
    | "🫅🏿"
    | "🫅"
    | "🤴🏻"
    | "🤴🏼"
    | "🤴🏽"
    | "🤴🏾"
    | "🤴🏿"
    | "🤴"
    | "👸🏻"
    | "👸🏼"
    | "👸🏽"
    | "👸🏾"
    | "👸🏿"
    | "👸"
    | "👳🏻"
    | "👳🏼"
    | "👳🏽"
    | "👳🏾"
    | "👳🏿"
    | "👳"
    | "👳🏻‍♂️"
    | "👳🏼‍♂️"
    | "👳🏽‍♂️"
    | "👳🏾‍♂️"
    | "👳🏿‍♂️"
    | "👳‍♂️"
    | "👳‍♂"
    | "👳🏻‍♀️"
    | "👳🏼‍♀️"
    | "👳🏽‍♀️"
    | "👳🏾‍♀️"
    | "👳🏿‍♀️"
    | "👳‍♀️"
    | "👳‍♀"
    | "👲🏻"
    | "👲🏼"
    | "👲🏽"
    | "👲🏾"
    | "👲🏿"
    | "👲"
    | "🧕🏻"
    | "🧕🏼"
    | "🧕🏽"
    | "🧕🏾"
    | "🧕🏿"
    | "🧕"
    | "🤵🏻"
    | "🤵🏼"
    | "🤵🏽"
    | "🤵🏾"
    | "🤵🏿"
    | "🤵"
    | "🤵🏻‍♂️"
    | "🤵🏼‍♂️"
    | "🤵🏽‍♂️"
    | "🤵🏾‍♂️"
    | "🤵🏿‍♂️"
    | "🤵‍♂️"
    | "🤵‍♂"
    | "🤵🏻‍♀️"
    | "🤵🏼‍♀️"
    | "🤵🏽‍♀️"
    | "🤵🏾‍♀️"
    | "🤵🏿‍♀️"
    | "🤵‍♀️"
    | "🤵‍♀"
    | "👰🏻"
    | "👰🏼"
    | "👰🏽"
    | "👰🏾"
    | "👰🏿"
    | "👰"
    | "👰🏻‍♂️"
    | "👰🏼‍♂️"
    | "👰🏽‍♂️"
    | "👰🏾‍♂️"
    | "👰🏿‍♂️"
    | "👰‍♂️"
    | "👰‍♂"
    | "👰🏻‍♀️"
    | "👰🏼‍♀️"
    | "👰🏽‍♀️"
    | "👰🏾‍♀️"
    | "👰🏿‍♀️"
    | "👰‍♀️"
    | "👰‍♀"
    | "🤰🏻"
    | "🤰🏼"
    | "🤰🏽"
    | "🤰🏾"
    | "🤰🏿"
    | "🤰"
    | "🫃🏻"
    | "🫃🏼"
    | "🫃🏽"
    | "🫃🏾"
    | "🫃🏿"
    | "🫃"
    | "🫄🏻"
    | "🫄🏼"
    | "🫄🏽"
    | "🫄🏾"
    | "🫄🏿"
    | "🫄"
    | "🤱🏻"
    | "🤱🏼"
    | "🤱🏽"
    | "🤱🏾"
    | "🤱🏿"
    | "🤱"
    | "👩🏻‍🍼"
    | "👩🏼‍🍼"
    | "👩🏽‍🍼"
    | "👩🏾‍🍼"
    | "👩🏿‍🍼"
    | "👩‍🍼"
    | "👨🏻‍🍼"
    | "👨🏼‍🍼"
    | "👨🏽‍🍼"
    | "👨🏾‍🍼"
    | "👨🏿‍🍼"
    | "👨‍🍼"
    | "🧑🏻‍🍼"
    | "🧑🏼‍🍼"
    | "🧑🏽‍🍼"
    | "🧑🏾‍🍼"
    | "🧑🏿‍🍼"
    | "🧑‍🍼"
    | "👼🏻"
    | "👼🏼"
    | "👼🏽"
    | "👼🏾"
    | "👼🏿"
    | "👼"
    | "🎅🏻"
    | "🎅🏼"
    | "🎅🏽"
    | "🎅🏾"
    | "🎅🏿"
    | "🎅"
    | "🤶🏻"
    | "🤶🏼"
    | "🤶🏽"
    | "🤶🏾"
    | "🤶🏿"
    | "🤶"
    | "🧑🏻‍🎄"
    | "🧑🏼‍🎄"
    | "🧑🏽‍🎄"
    | "🧑🏾‍🎄"
    | "🧑🏿‍🎄"
    | "🧑‍🎄"
    | "🦸🏻"
    | "🦸🏼"
    | "🦸🏽"
    | "🦸🏾"
    | "🦸🏿"
    | "🦸"
    | "🦸🏻‍♂️"
    | "🦸🏼‍♂️"
    | "🦸🏽‍♂️"
    | "🦸🏾‍♂️"
    | "🦸🏿‍♂️"
    | "🦸‍♂️"
    | "🦸‍♂"
    | "🦸🏻‍♀️"
    | "🦸🏼‍♀️"
    | "🦸🏽‍♀️"
    | "🦸🏾‍♀️"
    | "🦸🏿‍♀️"
    | "🦸‍♀️"
    | "🦸‍♀"
    | "🦹🏻"
    | "🦹🏼"
    | "🦹🏽"
    | "🦹🏾"
    | "🦹🏿"
    | "🦹"
    | "🦹🏻‍♂️"
    | "🦹🏼‍♂️"
    | "🦹🏽‍♂️"
    | "🦹🏾‍♂️"
    | "🦹🏿‍♂️"
    | "🦹‍♂️"
    | "🦹‍♂"
    | "🦹🏻‍♀️"
    | "🦹🏼‍♀️"
    | "🦹🏽‍♀️"
    | "🦹🏾‍♀️"
    | "🦹🏿‍♀️"
    | "🦹‍♀️"
    | "🦹‍♀"
    | "🧙🏻"
    | "🧙🏼"
    | "🧙🏽"
    | "🧙🏾"
    | "🧙🏿"
    | "🧙"
    | "🧙🏻‍♂️"
    | "🧙🏼‍♂️"
    | "🧙🏽‍♂️"
    | "🧙🏾‍♂️"
    | "🧙🏿‍♂️"
    | "🧙‍♂️"
    | "🧙‍♂"
    | "🧙🏻‍♀️"
    | "🧙🏼‍♀️"
    | "🧙🏽‍♀️"
    | "🧙🏾‍♀️"
    | "🧙🏿‍♀️"
    | "🧙‍♀️"
    | "🧙‍♀"
    | "🧚🏻"
    | "🧚🏼"
    | "🧚🏽"
    | "🧚🏾"
    | "🧚🏿"
    | "🧚"
    | "🧚🏻‍♂️"
    | "🧚🏼‍♂️"
    | "🧚🏽‍♂️"
    | "🧚🏾‍♂️"
    | "🧚🏿‍♂️"
    | "🧚‍♂️"
    | "🧚‍♂"
    | "🧚🏻‍♀️"
    | "🧚🏼‍♀️"
    | "🧚🏽‍♀️"
    | "🧚🏾‍♀️"
    | "🧚🏿‍♀️"
    | "🧚‍♀️"
    | "🧚‍♀"
    | "🧛🏻"
    | "🧛🏼"
    | "🧛🏽"
    | "🧛🏾"
    | "🧛🏿"
    | "🧛"
    | "🧛🏻‍♂️"
    | "🧛🏼‍♂️"
    | "🧛🏽‍♂️"
    | "🧛🏾‍♂️"
    | "🧛🏿‍♂️"
    | "🧛‍♂️"
    | "🧛‍♂"
    | "🧛🏻‍♀️"
    | "🧛🏼‍♀️"
    | "🧛🏽‍♀️"
    | "🧛🏾‍♀️"
    | "🧛🏿‍♀️"
    | "🧛‍♀️"
    | "🧛‍♀"
    | "🧜🏻"
    | "🧜🏼"
    | "🧜🏽"
    | "🧜🏾"
    | "🧜🏿"
    | "🧜"
    | "🧜🏻‍♂️"
    | "🧜🏼‍♂️"
    | "🧜🏽‍♂️"
    | "🧜🏾‍♂️"
    | "🧜🏿‍♂️"
    | "🧜‍♂️"
    | "🧜‍♂"
    | "🧜🏻‍♀️"
    | "🧜🏼‍♀️"
    | "🧜🏽‍♀️"
    | "🧜🏾‍♀️"
    | "🧜🏿‍♀️"
    | "🧜‍♀️"
    | "🧜‍♀"
    | "🧝🏻"
    | "🧝🏼"
    | "🧝🏽"
    | "🧝🏾"
    | "🧝🏿"
    | "🧝"
    | "🧝🏻‍♂️"
    | "🧝🏼‍♂️"
    | "🧝🏽‍♂️"
    | "🧝🏾‍♂️"
    | "🧝🏿‍♂️"
    | "🧝‍♂️"
    | "🧝‍♂"
    | "🧝🏻‍♀️"
    | "🧝🏼‍♀️"
    | "🧝🏽‍♀️"
    | "🧝🏾‍♀️"
    | "🧝🏿‍♀️"
    | "🧝‍♀️"
    | "🧝‍♀"
    | "🧞"
    | "🧞‍♂️"
    | "🧞‍♂"
    | "🧞‍♀️"
    | "🧞‍♀"
    | "🧟"
    | "🧟‍♂️"
    | "🧟‍♂"
    | "🧟‍♀️"
    | "🧟‍♀"
    | "🧌"
    | "💆🏻"
    | "💆🏼"
    | "💆🏽"
    | "💆🏾"
    | "💆🏿"
    | "💆"
    | "💆🏻‍♂️"
    | "💆🏼‍♂️"
    | "💆🏽‍♂️"
    | "💆🏾‍♂️"
    | "💆🏿‍♂️"
    | "💆‍♂️"
    | "💆‍♂"
    | "💆🏻‍♀️"
    | "💆🏼‍♀️"
    | "💆🏽‍♀️"
    | "💆🏾‍♀️"
    | "💆🏿‍♀️"
    | "💆‍♀️"
    | "💆‍♀"
    | "💇🏻"
    | "💇🏼"
    | "💇🏽"
    | "💇🏾"
    | "💇🏿"
    | "💇"
    | "💇🏻‍♂️"
    | "💇🏼‍♂️"
    | "💇🏽‍♂️"
    | "💇🏾‍♂️"
    | "💇🏿‍♂️"
    | "💇‍♂️"
    | "💇‍♂"
    | "💇🏻‍♀️"
    | "💇🏼‍♀️"
    | "💇🏽‍♀️"
    | "💇🏾‍♀️"
    | "💇🏿‍♀️"
    | "💇‍♀️"
    | "💇‍♀"
    | "🚶🏻"
    | "🚶🏼"
    | "🚶🏽"
    | "🚶🏾"
    | "🚶🏿"
    | "🚶"
    | "🚶🏻‍♂️"
    | "🚶🏼‍♂️"
    | "🚶🏽‍♂️"
    | "🚶🏾‍♂️"
    | "🚶🏿‍♂️"
    | "🚶‍♂️"
    | "🚶‍♂"
    | "🚶🏻‍♀️"
    | "🚶🏼‍♀️"
    | "🚶🏽‍♀️"
    | "🚶🏾‍♀️"
    | "🚶🏿‍♀️"
    | "🚶‍♀️"
    | "🚶‍♀"
    | "🧍🏻"
    | "🧍🏼"
    | "🧍🏽"
    | "🧍🏾"
    | "🧍🏿"
    | "🧍"
    | "🧍🏻‍♂️"
    | "🧍🏼‍♂️"
    | "🧍🏽‍♂️"
    | "🧍🏾‍♂️"
    | "🧍🏿‍♂️"
    | "🧍‍♂️"
    | "🧍‍♂"
    | "🧍🏻‍♀️"
    | "🧍🏼‍♀️"
    | "🧍🏽‍♀️"
    | "🧍🏾‍♀️"
    | "🧍🏿‍♀️"
    | "🧍‍♀️"
    | "🧍‍♀"
    | "🧎🏻"
    | "🧎🏼"
    | "🧎🏽"
    | "🧎🏾"
    | "🧎🏿"
    | "🧎"
    | "🧎🏻‍♂️"
    | "🧎🏼‍♂️"
    | "🧎🏽‍♂️"
    | "🧎🏾‍♂️"
    | "🧎🏿‍♂️"
    | "🧎‍♂️"
    | "🧎‍♂"
    | "🧎🏻‍♀️"
    | "🧎🏼‍♀️"
    | "🧎🏽‍♀️"
    | "🧎🏾‍♀️"
    | "🧎🏿‍♀️"
    | "🧎‍♀️"
    | "🧎‍♀"
    | "🧑🏻‍🦯"
    | "🧑🏼‍🦯"
    | "🧑🏽‍🦯"
    | "🧑🏾‍🦯"
    | "🧑🏿‍🦯"
    | "🧑‍🦯"
    | "👨🏻‍🦯"
    | "👨🏼‍🦯"
    | "👨🏽‍🦯"
    | "👨🏾‍🦯"
    | "👨🏿‍🦯"
    | "👨‍🦯"
    | "👩🏻‍🦯"
    | "👩🏼‍🦯"
    | "👩🏽‍🦯"
    | "👩🏾‍🦯"
    | "👩🏿‍🦯"
    | "👩‍🦯"
    | "🧑🏻‍🦼"
    | "🧑🏼‍🦼"
    | "🧑🏽‍🦼"
    | "🧑🏾‍🦼"
    | "🧑🏿‍🦼"
    | "🧑‍🦼"
    | "👨🏻‍🦼"
    | "👨🏼‍🦼"
    | "👨🏽‍🦼"
    | "👨🏾‍🦼"
    | "👨🏿‍🦼"
    | "👨‍🦼"
    | "👩🏻‍🦼"
    | "👩🏼‍🦼"
    | "👩🏽‍🦼"
    | "👩🏾‍🦼"
    | "👩🏿‍🦼"
    | "👩‍🦼"
    | "🧑🏻‍🦽"
    | "🧑🏼‍🦽"
    | "🧑🏽‍🦽"
    | "🧑🏾‍🦽"
    | "🧑🏿‍🦽"
    | "🧑‍🦽"
    | "👨🏻‍🦽"
    | "👨🏼‍🦽"
    | "👨🏽‍🦽"
    | "👨🏾‍🦽"
    | "👨🏿‍🦽"
    | "👨‍🦽"
    | "👩🏻‍🦽"
    | "👩🏼‍🦽"
    | "👩🏽‍🦽"
    | "👩🏾‍🦽"
    | "👩🏿‍🦽"
    | "👩‍🦽"
    | "🏃🏻"
    | "🏃🏼"
    | "🏃🏽"
    | "🏃🏾"
    | "🏃🏿"
    | "🏃"
    | "🏃🏻‍♂️"
    | "🏃🏼‍♂️"
    | "🏃🏽‍♂️"
    | "🏃🏾‍♂️"
    | "🏃🏿‍♂️"
    | "🏃‍♂️"
    | "🏃‍♂"
    | "🏃🏻‍♀️"
    | "🏃🏼‍♀️"
    | "🏃🏽‍♀️"
    | "🏃🏾‍♀️"
    | "🏃🏿‍♀️"
    | "🏃‍♀️"
    | "🏃‍♀"
    | "💃🏻"
    | "💃🏼"
    | "💃🏽"
    | "💃🏾"
    | "💃🏿"
    | "💃"
    | "🕺🏻"
    | "🕺🏼"
    | "🕺🏽"
    | "🕺🏾"
    | "🕺🏿"
    | "🕺"
    | "🕴🏻"
    | "🕴🏼"
    | "🕴🏽"
    | "🕴🏾"
    | "🕴🏿"
    | "🕴️"
    | "🕴"
    | "👯"
    | "👯‍♂️"
    | "👯‍♂"
    | "👯‍♀️"
    | "👯‍♀"
    | "🧖🏻"
    | "🧖🏼"
    | "🧖🏽"
    | "🧖🏾"
    | "🧖🏿"
    | "🧖"
    | "🧖🏻‍♂️"
    | "🧖🏼‍♂️"
    | "🧖🏽‍♂️"
    | "🧖🏾‍♂️"
    | "🧖🏿‍♂️"
    | "🧖‍♂️"
    | "🧖‍♂"
    | "🧖🏻‍♀️"
    | "🧖🏼‍♀️"
    | "🧖🏽‍♀️"
    | "🧖🏾‍♀️"
    | "🧖🏿‍♀️"
    | "🧖‍♀️"
    | "🧖‍♀"
    | "🧗🏻"
    | "🧗🏼"
    | "🧗🏽"
    | "🧗🏾"
    | "🧗🏿"
    | "🧗"
    | "🧗🏻‍♂️"
    | "🧗🏼‍♂️"
    | "🧗🏽‍♂️"
    | "🧗🏾‍♂️"
    | "🧗🏿‍♂️"
    | "🧗‍♂️"
    | "🧗‍♂"
    | "🧗🏻‍♀️"
    | "🧗🏼‍♀️"
    | "🧗🏽‍♀️"
    | "🧗🏾‍♀️"
    | "🧗🏿‍♀️"
    | "🧗‍♀️"
    | "🧗‍♀"
    | "🤺"
    | "🏇🏻"
    | "🏇🏼"
    | "🏇🏽"
    | "🏇🏾"
    | "🏇🏿"
    | "🏇"
    | "⛷️"
    | "⛷"
    | "🏂🏻"
    | "🏂🏼"
    | "🏂🏽"
    | "🏂🏾"
    | "🏂🏿"
    | "🏂"
    | "🏌🏻"
    | "🏌🏼"
    | "🏌🏽"
    | "🏌🏾"
    | "🏌🏿"
    | "🏌️"
    | "🏌"
    | "🏌🏻‍♂️"
    | "🏌🏼‍♂️"
    | "🏌🏽‍♂️"
    | "🏌🏾‍♂️"
    | "🏌🏿‍♂️"
    | "🏌️‍♂️"
    | "🏌🏻‍♀️"
    | "🏌🏼‍♀️"
    | "🏌🏽‍♀️"
    | "🏌🏾‍♀️"
    | "🏌🏿‍♀️"
    | "🏌️‍♀️"
    | "🏄🏻"
    | "🏄🏼"
    | "🏄🏽"
    | "🏄🏾"
    | "🏄🏿"
    | "🏄"
    | "🏄🏻‍♂️"
    | "🏄🏼‍♂️"
    | "🏄🏽‍♂️"
    | "🏄🏾‍♂️"
    | "🏄🏿‍♂️"
    | "🏄‍♂️"
    | "🏄‍♂"
    | "🏄🏻‍♀️"
    | "🏄🏼‍♀️"
    | "🏄🏽‍♀️"
    | "🏄🏾‍♀️"
    | "🏄🏿‍♀️"
    | "🏄‍♀️"
    | "🏄‍♀"
    | "🚣🏻"
    | "🚣🏼"
    | "🚣🏽"
    | "🚣🏾"
    | "🚣🏿"
    | "🚣"
    | "🚣🏻‍♂️"
    | "🚣🏼‍♂️"
    | "🚣🏽‍♂️"
    | "🚣🏾‍♂️"
    | "🚣🏿‍♂️"
    | "🚣‍♂️"
    | "🚣‍♂"
    | "🚣🏻‍♀️"
    | "🚣🏼‍♀️"
    | "🚣🏽‍♀️"
    | "🚣🏾‍♀️"
    | "🚣🏿‍♀️"
    | "🚣‍♀️"
    | "🚣‍♀"
    | "🏊🏻"
    | "🏊🏼"
    | "🏊🏽"
    | "🏊🏾"
    | "🏊🏿"
    | "🏊"
    | "🏊🏻‍♂️"
    | "🏊🏼‍♂️"
    | "🏊🏽‍♂️"
    | "🏊🏾‍♂️"
    | "🏊🏿‍♂️"
    | "🏊‍♂️"
    | "🏊‍♂"
    | "🏊🏻‍♀️"
    | "🏊🏼‍♀️"
    | "🏊🏽‍♀️"
    | "🏊🏾‍♀️"
    | "🏊🏿‍♀️"
    | "🏊‍♀️"
    | "🏊‍♀"
    | "⛹🏻"
    | "⛹🏼"
    | "⛹🏽"
    | "⛹🏾"
    | "⛹🏿"
    | "⛹️"
    | "⛹"
    | "⛹🏻‍♂️"
    | "⛹🏼‍♂️"
    | "⛹🏽‍♂️"
    | "⛹🏾‍♂️"
    | "⛹🏿‍♂️"
    | "⛹️‍♂️"
    | "⛹🏻‍♀️"
    | "⛹🏼‍♀️"
    | "⛹🏽‍♀️"
    | "⛹🏾‍♀️"
    | "⛹🏿‍♀️"
    | "⛹️‍♀️"
    | "🏋🏻"
    | "🏋🏼"
    | "🏋🏽"
    | "🏋🏾"
    | "🏋🏿"
    | "🏋️"
    | "🏋"
    | "🏋🏻‍♂️"
    | "🏋🏼‍♂️"
    | "🏋🏽‍♂️"
    | "🏋🏾‍♂️"
    | "🏋🏿‍♂️"
    | "🏋️‍♂️"
    | "🏋🏻‍♀️"
    | "🏋🏼‍♀️"
    | "🏋🏽‍♀️"
    | "🏋🏾‍♀️"
    | "🏋🏿‍♀️"
    | "🏋️‍♀️"
    | "🚴🏻"
    | "🚴🏼"
    | "🚴🏽"
    | "🚴🏾"
    | "🚴🏿"
    | "🚴"
    | "🚴🏻‍♂️"
    | "🚴🏼‍♂️"
    | "🚴🏽‍♂️"
    | "🚴🏾‍♂️"
    | "🚴🏿‍♂️"
    | "🚴‍♂️"
    | "🚴‍♂"
    | "🚴🏻‍♀️"
    | "🚴🏼‍♀️"
    | "🚴🏽‍♀️"
    | "🚴🏾‍♀️"
    | "🚴🏿‍♀️"
    | "🚴‍♀️"
    | "🚴‍♀"
    | "🚵🏻"
    | "🚵🏼"
    | "🚵🏽"
    | "🚵🏾"
    | "🚵🏿"
    | "🚵"
    | "🚵🏻‍♂️"
    | "🚵🏼‍♂️"
    | "🚵🏽‍♂️"
    | "🚵🏾‍♂️"
    | "🚵🏿‍♂️"
    | "🚵‍♂️"
    | "🚵‍♂"
    | "🚵🏻‍♀️"
    | "🚵🏼‍♀️"
    | "🚵🏽‍♀️"
    | "🚵🏾‍♀️"
    | "🚵🏿‍♀️"
    | "🚵‍♀️"
    | "🚵‍♀"
    | "🤸🏻"
    | "🤸🏼"
    | "🤸🏽"
    | "🤸🏾"
    | "🤸🏿"
    | "🤸"
    | "🤸🏻‍♂️"
    | "🤸🏼‍♂️"
    | "🤸🏽‍♂️"
    | "🤸🏾‍♂️"
    | "🤸🏿‍♂️"
    | "🤸‍♂️"
    | "🤸‍♂"
    | "🤸🏻‍♀️"
    | "🤸🏼‍♀️"
    | "🤸🏽‍♀️"
    | "🤸🏾‍♀️"
    | "🤸🏿‍♀️"
    | "🤸‍♀️"
    | "🤸‍♀"
    | "🤼"
    | "🤼‍♂️"
    | "🤼‍♂"
    | "🤼‍♀️"
    | "🤼‍♀"
    | "🤽🏻"
    | "🤽🏼"
    | "🤽🏽"
    | "🤽🏾"
    | "🤽🏿"
    | "🤽"
    | "🤽🏻‍♂️"
    | "🤽🏼‍♂️"
    | "🤽🏽‍♂️"
    | "🤽🏾‍♂️"
    | "🤽🏿‍♂️"
    | "🤽‍♂️"
    | "🤽‍♂"
    | "🤽🏻‍♀️"
    | "🤽🏼‍♀️"
    | "🤽🏽‍♀️"
    | "🤽🏾‍♀️"
    | "🤽🏿‍♀️"
    | "🤽‍♀️"
    | "🤽‍♀"
    | "🤾🏻"
    | "🤾🏼"
    | "🤾🏽"
    | "🤾🏾"
    | "🤾🏿"
    | "🤾"
    | "🤾🏻‍♂️"
    | "🤾🏼‍♂️"
    | "🤾🏽‍♂️"
    | "🤾🏾‍♂️"
    | "🤾🏿‍♂️"
    | "🤾‍♂️"
    | "🤾‍♂"
    | "🤾🏻‍♀️"
    | "🤾🏼‍♀️"
    | "🤾🏽‍♀️"
    | "🤾🏾‍♀️"
    | "🤾🏿‍♀️"
    | "🤾‍♀️"
    | "🤾‍♀"
    | "🤹🏻"
    | "🤹🏼"
    | "🤹🏽"
    | "🤹🏾"
    | "🤹🏿"
    | "🤹"
    | "🤹🏻‍♂️"
    | "🤹🏼‍♂️"
    | "🤹🏽‍♂️"
    | "🤹🏾‍♂️"
    | "🤹🏿‍♂️"
    | "🤹‍♂️"
    | "🤹‍♂"
    | "🤹🏻‍♀️"
    | "🤹🏼‍♀️"
    | "🤹🏽‍♀️"
    | "🤹🏾‍♀️"
    | "🤹🏿‍♀️"
    | "🤹‍♀️"
    | "🤹‍♀"
    | "🧘🏻"
    | "🧘🏼"
    | "🧘🏽"
    | "🧘🏾"
    | "🧘🏿"
    | "🧘"
    | "🧘🏻‍♂️"
    | "🧘🏼‍♂️"
    | "🧘🏽‍♂️"
    | "🧘🏾‍♂️"
    | "🧘🏿‍♂️"
    | "🧘‍♂️"
    | "🧘‍♂"
    | "🧘🏻‍♀️"
    | "🧘🏼‍♀️"
    | "🧘🏽‍♀️"
    | "🧘🏾‍♀️"
    | "🧘🏿‍♀️"
    | "🧘‍♀️"
    | "🧘‍♀"
    | "🛀🏻"
    | "🛀🏼"
    | "🛀🏽"
    | "🛀🏾"
    | "🛀🏿"
    | "🛀"
    | "🛌🏻"
    | "🛌🏼"
    | "🛌🏽"
    | "🛌🏾"
    | "🛌🏿"
    | "🛌"
    | "🧑🏻‍🤝‍🧑🏻"
    | "🧑🏻‍🤝‍🧑🏼"
    | "🧑🏻‍🤝‍🧑🏽"
    | "🧑🏻‍🤝‍🧑🏾"
    | "🧑🏻‍🤝‍🧑🏿"
    | "🧑🏼‍🤝‍🧑🏻"
    | "🧑🏼‍🤝‍🧑🏼"
    | "🧑🏼‍🤝‍🧑🏽"
    | "🧑🏼‍🤝‍🧑🏾"
    | "🧑🏼‍🤝‍🧑🏿"
    | "🧑🏽‍🤝‍🧑🏻"
    | "🧑🏽‍🤝‍🧑🏼"
    | "🧑🏽‍🤝‍🧑🏽"
    | "🧑🏽‍🤝‍🧑🏾"
    | "🧑🏽‍🤝‍🧑🏿"
    | "🧑🏾‍🤝‍🧑🏻"
    | "🧑🏾‍🤝‍🧑🏼"
    | "🧑🏾‍🤝‍🧑🏽"
    | "🧑🏾‍🤝‍🧑🏾"
    | "🧑🏾‍🤝‍🧑🏿"
    | "🧑🏿‍🤝‍🧑🏻"
    | "🧑🏿‍🤝‍🧑🏼"
    | "🧑🏿‍🤝‍🧑🏽"
    | "🧑🏿‍🤝‍🧑🏾"
    | "🧑🏿‍🤝‍🧑🏿"
    | "🧑‍🤝‍🧑"
    | "👭"
    | "👫"
    | "👬"
    | "💏"
    | "💑"
    | "👪"
    | "👨‍👩‍👦"
    | "👨‍👩‍👧"
    | "👨‍👩‍👧‍👦"
    | "👨‍👩‍👦‍👦"
    | "👨‍👩‍👧‍👧"
    | "👨‍👨‍👦"
    | "👨‍👨‍👧"
    | "👨‍👨‍👧‍👦"
    | "👨‍👨‍👦‍👦"
    | "👨‍👨‍👧‍👧"
    | "👩‍👩‍👦"
    | "👩‍👩‍👧"
    | "👩‍👩‍👧‍👦"
    | "👩‍👩‍👦‍👦"
    | "👩‍👩‍👧‍👧"
    | "👨‍👦"
    | "👨‍👦‍👦"
    | "👨‍👧"
    | "👨‍👧‍👦"
    | "👨‍👧‍👧"
    | "👩‍👦"
    | "👩‍👦‍👦"
    | "👩‍👧"
    | "👩‍👧‍👦"
    | "👩‍👧‍👧"
    | "🗣️"
    | "🗣"
    | "👤"
    | "👥"
    | "🫂"
    | "👣"
    | "🐵"
    | "🐒"
    | "🦍"
    | "🦧"
    | "🐶"
    | "🐕"
    | "🦮"
    | "🐕‍🦺"
    | "🐩"
    | "🐺"
    | "🦊"
    | "🦝"
    | "🐱"
    | "🐈"
    | "🐈‍⬛"
    | "🦁"
    | "🐯"
    | "🐅"
    | "🐆"
    | "🐴"
    | "🐎"
    | "🦄"
    | "🦓"
    | "🦌"
    | "🦬"
    | "🐮"
    | "🐂"
    | "🐃"
    | "🐄"
    | "🐷"
    | "🐖"
    | "🐗"
    | "🐽"
    | "🐏"
    | "🐑"
    | "🐐"
    | "🐪"
    | "🐫"
    | "🦙"
    | "🦒"
    | "🐘"
    | "🦣"
    | "🦏"
    | "🦛"
    | "🐭"
    | "🐁"
    | "🐀"
    | "🐹"
    | "🐰"
    | "🐇"
    | "🐿️"
    | "🐿"
    | "🦫"
    | "🦔"
    | "🦇"
    | "🐻"
    | "🐻‍❄️"
    | "🐻‍❄"
    | "🐨"
    | "🐼"
    | "🦥"
    | "🦦"
    | "🦨"
    | "🦘"
    | "🦡"
    | "🐾"
    | "🦃"
    | "🐔"
    | "🐓"
    | "🐣"
    | "🐤"
    | "🐥"
    | "🐦"
    | "🐧"
    | "🕊️"
    | "🕊"
    | "🦅"
    | "🦆"
    | "🦢"
    | "🦉"
    | "🦤"
    | "🪶"
    | "🦩"
    | "🦚"
    | "🦜"
    | "🐸"
    | "🐊"
    | "🐢"
    | "🦎"
    | "🐍"
    | "🐲"
    | "🐉"
    | "🦕"
    | "🦖"
    | "🐳"
    | "🐋"
    | "🐬"
    | "🦭"
    | "🐟"
    | "🐠"
    | "🐡"
    | "🦈"
    | "🐙"
    | "🐚"
    | "🪸"
    | "🐌"
    | "🦋"
    | "🐛"
    | "🐜"
    | "🐝"
    | "🪲"
    | "🐞"
    | "🦗"
    | "🪳"
    | "🕷️"
    | "🕷"
    | "🕸️"
    | "🕸"
    | "🦂"
    | "🦟"
    | "🪰"
    | "🪱"
    | "🦠"
    | "💐"
    | "🌸"
    | "💮"
    | "🪷"
    | "🏵️"
    | "🏵"
    | "🌹"
    | "🥀"
    | "🌺"
    | "🌻"
    | "🌼"
    | "🌷"
    | "🌱"
    | "🪴"
    | "🌲"
    | "🌳"
    | "🌴"
    | "🌵"
    | "🌾"
    | "🌿"
    | "☘️"
    | "☘"
    | "🍀"
    | "🍁"
    | "🍂"
    | "🍃"
    | "🪹"
    | "🪺"
    | "🍇"
    | "🍈"
    | "🍉"
    | "🍊"
    | "🍋"
    | "🍌"
    | "🍍"
    | "🥭"
    | "🍎"
    | "🍏"
    | "🍐"
    | "🍑"
    | "🍒"
    | "🍓"
    | "🫐"
    | "🥝"
    | "🍅"
    | "🫒"
    | "🥥"
    | "🥑"
    | "🍆"
    | "🥔"
    | "🥕"
    | "🌽"
    | "🌶️"
    | "🌶"
    | "🫑"
    | "🥒"
    | "🥬"
    | "🥦"
    | "🧄"
    | "🧅"
    | "🍄"
    | "🥜"
    | "🫘"
    | "🌰"
    | "🍞"
    | "🥐"
    | "🥖"
    | "🫓"
    | "🥨"
    | "🥯"
    | "🥞"
    | "🧇"
    | "🧀"
    | "🍖"
    | "🍗"
    | "🥩"
    | "🥓"
    | "🍔"
    | "🍟"
    | "🍕"
    | "🌭"
    | "🥪"
    | "🌮"
    | "🌯"
    | "🫔"
    | "🥙"
    | "🧆"
    | "🥚"
    | "🍳"
    | "🥘"
    | "🍲"
    | "🫕"
    | "🥣"
    | "🥗"
    | "🍿"
    | "🧈"
    | "🧂"
    | "🥫"
    | "🍱"
    | "🍘"
    | "🍙"
    | "🍚"
    | "🍛"
    | "🍜"
    | "🍝"
    | "🍠"
    | "🍢"
    | "🍣"
    | "🍤"
    | "🍥"
    | "🥮"
    | "🍡"
    | "🥟"
    | "🥠"
    | "🥡"
    | "🦀"
    | "🦞"
    | "🦐"
    | "🦑"
    | "🦪"
    | "🍦"
    | "🍧"
    | "🍨"
    | "🍩"
    | "🍪"
    | "🎂"
    | "🍰"
    | "🧁"
    | "🥧"
    | "🍫"
    | "🍬"
    | "🍭"
    | "🍮"
    | "🍯"
    | "🍼"
    | "🥛"
    | "☕"
    | "🫖"
    | "🍵"
    | "🍶"
    | "🍾"
    | "🍷"
    | "🍸"
    | "🍹"
    | "🍺"
    | "🍻"
    | "🥂"
    | "🥃"
    | "🫗"
    | "🥤"
    | "🧋"
    | "🧃"
    | "🧉"
    | "🧊"
    | "🥢"
    | "🍽️"
    | "🍽"
    | "🍴"
    | "🥄"
    | "🔪"
    | "🫙"
    | "🏺"
    | "🌍"
    | "🌎"
    | "🌏"
    | "🌐"
    | "🗺️"
    | "🗺"
    | "🗾"
    | "🧭"
    | "🏔️"
    | "🏔"
    | "⛰️"
    | "⛰"
    | "🌋"
    | "🗻"
    | "🏕️"
    | "🏕"
    | "🏖️"
    | "🏖"
    | "🏜️"
    | "🏜"
    | "🏝️"
    | "🏝"
    | "🏞️"
    | "🏞"
    | "🏟️"
    | "🏟"
    | "🏛️"
    | "🏛"
    | "🏗️"
    | "🏗"
    | "🧱"
    | "🪨"
    | "🪵"
    | "🛖"
    | "🏘️"
    | "🏘"
    | "🏚️"
    | "🏚"
    | "🏠"
    | "🏡"
    | "🏢"
    | "🏣"
    | "🏤"
    | "🏥"
    | "🏦"
    | "🏨"
    | "🏩"
    | "🏪"
    | "🏫"
    | "🏬"
    | "🏭"
    | "🏯"
    | "🏰"
    | "💒"
    | "🗼"
    | "🗽"
    | "⛪"
    | "🕌"
    | "🛕"
    | "🕍"
    | "⛩️"
    | "⛩"
    | "🕋"
    | "⛲"
    | "⛺"
    | "🌁"
    | "🌃"
    | "🏙️"
    | "🏙"
    | "🌄"
    | "🌅"
    | "🌆"
    | "🌇"
    | "🌉"
    | "♨️"
    | "♨"
    | "🎠"
    | "🛝"
    | "🎡"
    | "🎢"
    | "💈"
    | "🎪"
    | "🚂"
    | "🚃"
    | "🚄"
    | "🚅"
    | "🚆"
    | "🚇"
    | "🚈"
    | "🚉"
    | "🚊"
    | "🚝"
    | "🚞"
    | "🚋"
    | "🚌"
    | "🚍"
    | "🚎"
    | "🚐"
    | "🚑"
    | "🚒"
    | "🚓"
    | "🚔"
    | "🚕"
    | "🚖"
    | "🚗"
    | "🚘"
    | "🚙"
    | "🛻"
    | "🚚"
    | "🚛"
    | "🚜"
    | "🏎️"
    | "🏎"
    | "🏍️"
    | "🏍"
    | "🛵"
    | "🦽"
    | "🦼"
    | "🛺"
    | "🚲"
    | "🛴"
    | "🛹"
    | "🛼"
    | "🚏"
    | "🛣️"
    | "🛣"
    | "🛤️"
    | "🛤"
    | "🛢️"
    | "🛢"
    | "⛽"
    | "🛞"
    | "🚨"
    | "🚥"
    | "🚦"
    | "🛑"
    | "🚧"
    | "⚓"
    | "🛟"
    | "⛵"
    | "🛶"
    | "🚤"
    | "🛳️"
    | "🛳"
    | "⛴️"
    | "⛴"
    | "🛥️"
    | "🛥"
    | "🚢"
    | "✈️"
    | "✈"
    | "🛩️"
    | "🛩"
    | "🛫"
    | "🛬"
    | "🪂"
    | "💺"
    | "🚁"
    | "🚟"
    | "🚠"
    | "🚡"
    | "🛰️"
    | "🛰"
    | "🚀"
    | "🛸"
    | "🛎️"
    | "🛎"
    | "🧳"
    | "⌛"
    | "⏳"
    | "⌚"
    | "⏰"
    | "⏱️"
    | "⏱"
    | "⏲️"
    | "⏲"
    | "🕰️"
    | "🕰"
    | "🕛"
    | "🕧"
    | "🕐"
    | "🕜"
    | "🕑"
    | "🕝"
    | "🕒"
    | "🕞"
    | "🕓"
    | "🕟"
    | "🕔"
    | "🕠"
    | "🕕"
    | "🕡"
    | "🕖"
    | "🕢"
    | "🕗"
    | "🕣"
    | "🕘"
    | "🕤"
    | "🕙"
    | "🕥"
    | "🕚"
    | "🕦"
    | "🌑"
    | "🌒"
    | "🌓"
    | "🌔"
    | "🌕"
    | "🌖"
    | "🌗"
    | "🌘"
    | "🌙"
    | "🌚"
    | "🌛"
    | "🌜"
    | "🌡️"
    | "🌡"
    | "☀️"
    | "☀"
    | "🌝"
    | "🌞"
    | "🪐"
    | "⭐"
    | "🌟"
    | "🌠"
    | "🌌"
    | "☁️"
    | "☁"
    | "⛅"
    | "⛈️"
    | "⛈"
    | "🌤️"
    | "🌤"
    | "🌥️"
    | "🌥"
    | "🌦️"
    | "🌦"
    | "🌧️"
    | "🌧"
    | "🌨️"
    | "🌨"
    | "🌩️"
    | "🌩"
    | "🌪️"
    | "🌪"
    | "🌫️"
    | "🌫"
    | "🌬️"
    | "🌬"
    | "🌀"
    | "🌈"
    | "🌂"
    | "☂️"
    | "☂"
    | "☔"
    | "⛱️"
    | "⛱"
    | "⚡"
    | "❄️"
    | "❄"
    | "☃️"
    | "☃"
    | "⛄"
    | "☄️"
    | "☄"
    | "🔥"
    | "💧"
    | "🌊"
    | "🎃"
    | "🎄"
    | "🎆"
    | "🎇"
    | "🧨"
    | "✨"
    | "🎈"
    | "🎉"
    | "🎊"
    | "🎋"
    | "🎍"
    | "🎎"
    | "🎏"
    | "🎐"
    | "🎑"
    | "🧧"
    | "🎀"
    | "🎁"
    | "🎗️"
    | "🎗"
    | "🎟️"
    | "🎟"
    | "🎫"
    | "🎖️"
    | "🎖"
    | "🏆"
    | "🏅"
    | "🥇"
    | "🥈"
    | "🥉"
    | "⚽"
    | "⚾"
    | "🥎"
    | "🏀"
    | "🏐"
    | "🏈"
    | "🏉"
    | "🎾"
    | "🥏"
    | "🎳"
    | "🏏"
    | "🏑"
    | "🏒"
    | "🥍"
    | "🏓"
    | "🏸"
    | "🥊"
    | "🥋"
    | "🥅"
    | "⛳"
    | "⛸️"
    | "⛸"
    | "🎣"
    | "🤿"
    | "🎽"
    | "🎿"
    | "🛷"
    | "🥌"
    | "🎯"
    | "🪀"
    | "🪁"
    | "🎱"
    | "🔮"
    | "🪄"
    | "🧿"
    | "🪬"
    | "🎮"
    | "🕹️"
    | "🕹"
    | "🎰"
    | "🎲"
    | "🧩"
    | "🧸"
    | "🪅"
    | "🪩"
    | "🪆"
    | "♠️"
    | "♠"
    | "♥️"
    | "♥"
    | "♦️"
    | "♦"
    | "♣️"
    | "♣"
    | "♟️"
    | "♟"
    | "🃏"
    | "🀄"
    | "🎴"
    | "🎭"
    | "🖼️"
    | "🖼"
    | "🎨"
    | "🧵"
    | "🪡"
    | "🧶"
    | "🪢"
    | "👓"
    | "🕶️"
    | "🕶"
    | "🥽"
    | "🥼"
    | "🦺"
    | "👔"
    | "👕"
    | "👖"
    | "🧣"
    | "🧤"
    | "🧥"
    | "🧦"
    | "👗"
    | "👘"
    | "🥻"
    | "🩱"
    | "🩲"
    | "🩳"
    | "👙"
    | "👚"
    | "👛"
    | "👜"
    | "👝"
    | "🛍️"
    | "🛍"
    | "🎒"
    | "🩴"
    | "👞"
    | "👟"
    | "🥾"
    | "🥿"
    | "👠"
    | "👡"
    | "🩰"
    | "👢"
    | "👑"
    | "👒"
    | "🎩"
    | "🎓"
    | "🧢"
    | "🪖"
    | "⛑️"
    | "⛑"
    | "📿"
    | "💄"
    | "💍"
    | "💎"
    | "🔇"
    | "🔈"
    | "🔉"
    | "🔊"
    | "📢"
    | "📣"
    | "📯"
    | "🔔"
    | "🔕"
    | "🎼"
    | "🎵"
    | "🎶"
    | "🎙️"
    | "🎙"
    | "🎚️"
    | "🎚"
    | "🎛️"
    | "🎛"
    | "🎤"
    | "🎧"
    | "📻"
    | "🎷"
    | "🪗"
    | "🎸"
    | "🎹"
    | "🎺"
    | "🎻"
    | "🪕"
    | "🥁"
    | "🪘"
    | "📱"
    | "📲"
    | "☎️"
    | "☎"
    | "📞"
    | "📟"
    | "📠"
    | "🔋"
    | "🪫"
    | "🔌"
    | "💻"
    | "🖥️"
    | "🖥"
    | "🖨️"
    | "🖨"
    | "⌨️"
    | "⌨"
    | "🖱️"
    | "🖱"
    | "🖲️"
    | "🖲"
    | "💽"
    | "💾"
    | "💿"
    | "📀"
    | "🧮"
    | "🎥"
    | "🎞️"
    | "🎞"
    | "📽️"
    | "📽"
    | "🎬"
    | "📺"
    | "📷"
    | "📸"
    | "📹"
    | "📼"
    | "🔍"
    | "🔎"
    | "🕯️"
    | "🕯"
    | "💡"
    | "🔦"
    | "🏮"
    | "🪔"
    | "📔"
    | "📕"
    | "📖"
    | "📗"
    | "📘"
    | "📙"
    | "📚"
    | "📓"
    | "📒"
    | "📃"
    | "📜"
    | "📄"
    | "📰"
    | "🗞️"
    | "🗞"
    | "📑"
    | "🔖"
    | "🏷️"
    | "🏷"
    | "💰"
    | "🪙"
    | "💴"
    | "💵"
    | "💶"
    | "💷"
    | "💸"
    | "💳"
    | "🧾"
    | "💹"
    | "✉️"
    | "✉"
    | "📧"
    | "📨"
    | "📩"
    | "📤"
    | "📥"
    | "📦"
    | "📫"
    | "📪"
    | "📬"
    | "📭"
    | "📮"
    | "🗳️"
    | "🗳"
    | "✏️"
    | "✏"
    | "✒️"
    | "✒"
    | "🖋️"
    | "🖋"
    | "🖊️"
    | "🖊"
    | "🖌️"
    | "🖌"
    | "🖍️"
    | "🖍"
    | "📝"
    | "💼"
    | "📁"
    | "📂"
    | "🗂️"
    | "🗂"
    | "📅"
    | "📆"
    | "🗒️"
    | "🗒"
    | "🗓️"
    | "🗓"
    | "📇"
    | "📈"
    | "📉"
    | "📊"
    | "📋"
    | "📌"
    | "📍"
    | "📎"
    | "🖇️"
    | "🖇"
    | "📏"
    | "📐"
    | "✂️"
    | "✂"
    | "🗃️"
    | "🗃"
    | "🗄️"
    | "🗄"
    | "🗑️"
    | "🗑"
    | "🔒"
    | "🔓"
    | "🔏"
    | "🔐"
    | "🔑"
    | "🗝️"
    | "🗝"
    | "🔨"
    | "🪓"
    | "⛏️"
    | "⛏"
    | "⚒️"
    | "⚒"
    | "🛠️"
    | "🛠"
    | "🗡️"
    | "🗡"
    | "⚔️"
    | "⚔"
    | "🔫"
    | "🪃"
    | "🏹"
    | "🛡️"
    | "🛡"
    | "🪚"
    | "🔧"
    | "🪛"
    | "🔩"
    | "⚙️"
    | "⚙"
    | "🗜️"
    | "🗜"
    | "⚖️"
    | "⚖"
    | "🦯"
    | "🔗"
    | "⛓️"
    | "⛓"
    | "🪝"
    | "🧰"
    | "🧲"
    | "🪜"
    | "⚗️"
    | "⚗"
    | "🧪"
    | "🧫"
    | "🧬"
    | "🔬"
    | "🔭"
    | "📡"
    | "💉"
    | "🩸"
    | "💊"
    | "🩹"
    | "🩼"
    | "🩺"
    | "🩻"
    | "🚪"
    | "🛗"
    | "🪞"
    | "🪟"
    | "🛏️"
    | "🛏"
    | "🛋️"
    | "🛋"
    | "🪑"
    | "🚽"
    | "🪠"
    | "🚿"
    | "🛁"
    | "🪤"
    | "🪒"
    | "🧴"
    | "🧷"
    | "🧹"
    | "🧺"
    | "🧻"
    | "🪣"
    | "🧼"
    | "🫧"
    | "🪥"
    | "🧽"
    | "🧯"
    | "🛒"
    | "🚬"
    | "⚰️"
    | "⚰"
    | "🪦"
    | "⚱️"
    | "⚱"
    | "🗿"
    | "🪧"
    | "🪪"
    | "🏧"
    | "🚮"
    | "🚰"
    | "♿"
    | "🚹"
    | "🚺"
    | "🚻"
    | "🚼"
    | "🚾"
    | "🛂"
    | "🛃"
    | "🛄"
    | "🛅"
    | "⚠️"
    | "⚠"
    | "🚸"
    | "⛔"
    | "🚫"
    | "🚳"
    | "🚭"
    | "🚯"
    | "🚱"
    | "🚷"
    | "📵"
    | "🔞"
    | "☢️"
    | "☢"
    | "☣️"
    | "☣"
    | "⬆️"
    | "⬆"
    | "↗️"
    | "↗"
    | "➡️"
    | "➡"
    | "↘️"
    | "↘"
    | "⬇️"
    | "⬇"
    | "↙️"
    | "↙"
    | "⬅️"
    | "⬅"
    | "↖️"
    | "↖"
    | "↕️"
    | "↕"
    | "↔️"
    | "↩️"
    | "↩"
    | "↪️"
    | "↪"
    | "⤴️"
    | "⤴"
    | "⤵️"
    | "⤵"
    | "🔃"
    | "🔄"
    | "🔙"
    | "🔚"
    | "🔛"
    | "🔜"
    | "🔝"
    | "🛐"
    | "⚛️"
    | "⚛"
    | "🕉️"
    | "🕉"
    | "✡️"
    | "✡"
    | "☸️"
    | "☸"
    | "☯️"
    | "☯"
    | "✝️"
    | "✝"
    | "☦️"
    | "☦"
    | "☪️"
    | "☪"
    | "☮️"
    | "☮"
    | "🕎"
    | "🔯"
    | "♈"
    | "♉"
    | "♊"
    | "♋"
    | "♌"
    | "♍"
    | "♎"
    | "♏"
    | "♐"
    | "♑"
    | "♒"
    | "♓"
    | "⛎"
    | "🔀"
    | "🔁"
    | "🔂"
    | "▶️"
    | "⏩"
    | "⏭️"
    | "⏭"
    | "⏯️"
    | "⏯"
    | "◀️"
    | "⏪"
    | "⏮️"
    | "⏮"
    | "🔼"
    | "⏫"
    | "🔽"
    | "⏬"
    | "⏸️"
    | "⏸"
    | "⏹️"
    | "⏹"
    | "⏺️"
    | "⏺"
    | "⏏️"
    | "⏏"
    | "🎦"
    | "🔅"
    | "🔆"
    | "📶"
    | "📳"
    | "📴"
    | "♀️"
    | "♀"
    | "♂️"
    | "♂"
    | "⚧️"
    | "⚧"
    | "✖️"
    | "✖"
    | "➕"
    | "➖"
    | "➗"
    | "🟰"
    | "♾️"
    | "♾"
    | "‼️"
    | "‼"
    | "⁉️"
    | "⁉"
    | "❓"
    | "❔"
    | "❕"
    | "❗"
    | "〰️"
    | "〰"
    | "💱"
    | "💲"
    | "⚕️"
    | "⚕"
    | "♻️"
    | "♻"
    | "⚜️"
    | "⚜"
    | "🔱"
    | "📛"
    | "🔰"
    | "⭕"
    | "✅"
    | "☑️"
    | "☑"
    | "✔️"
    | "✔"
    | "❌"
    | "❎"
    | "➰"
    | "➿"
    | "〽️"
    | "〽"
    | "✳️"
    | "✳"
    | "✴️"
    | "✴"
    | "❇️"
    | "❇"
    | "©️"
    | "©"
    | "®️"
    | "®"
    | "™️"
    | "#️⃣"
    | "#⃣"
    | "*️⃣"
    | "*⃣"
    | "0️⃣"
    | "0⃣"
    | "1️⃣"
    | "1⃣"
    | "2️⃣"
    | "2⃣"
    | "3️⃣"
    | "3⃣"
    | "4️⃣"
    | "4⃣"
    | "5️⃣"
    | "5⃣"
    | "6️⃣"
    | "6⃣"
    | "7️⃣"
    | "7⃣"
    | "8️⃣"
    | "8⃣"
    | "9️⃣"
    | "9⃣"
    | "🔟"
    | "🔠"
    | "🔡"
    | "🔢"
    | "🔣"
    | "🔤"
    | "🅰️"
    | "🅰"
    | "🆎"
    | "🅱️"
    | "🅱"
    | "🆑"
    | "🆒"
    | "🆓"
    | "ℹ️"
    | "ℹ"
    | "🆔"
    | "Ⓜ️"
    | "Ⓜ"
    | "🆕"
    | "🆖"
    | "🅾️"
    | "🅾"
    | "🆗"
    | "🅿️"
    | "🅿"
    | "🆘"
    | "🆙"
    | "🆚"
    | "🈁"
    | "🈂️"
    | "🈂"
    | "🈷️"
    | "🈷"
    | "🈶"
    | "🈯"
    | "🉐"
    | "🈹"
    | "🈚"
    | "🈲"
    | "🉑"
    | "🈸"
    | "🈴"
    | "🈳"
    | "㊗️"
    | "㊗"
    | "㊙️"
    | "㊙"
    | "🈺"
    | "🈵"
    | "🔴"
    | "🟠"
    | "🟡"
    | "🟢"
    | "🔵"
    | "🟣"
    | "🟤"
    | "⚫"
    | "⚪"
    | "🟥"
    | "🟧"
    | "🟨"
    | "🟩"
    | "🟦"
    | "🟪"
    | "🟫"
    | "⬛"
    | "⬜"
    | "◼️"
    | "◼"
    | "◻️"
    | "◻"
    | "◾"
    | "◽"
    | "▪️"
    | "▪"
    | "▫️"
    | "▫"
    | "🔶"
    | "🔷"
    | "🔸"
    | "🔹"
    | "🔺"
    | "🔻"
    | "💠"
    | "🔘"
    | "🔳"
    | "🔲"
    | "🏁"
    | "🚩"
    | "🎌"
    | "🏴"
    | "🏳️"
    | "🏳"
    | "🏳️‍🌈"
    | "🏳‍🌈"
    | "🏳️‍⚧️"
    | "🏴‍☠️"
    | "🏴‍☠"
    | "🇦🇨"
    | "🇦🇩"
    | "🇦🇪"
    | "🇦🇫"
    | "🇦🇬"
    | "🇦🇮"
    | "🇦🇱"
    | "🇦🇲"
    | "🇦🇴"
    | "🇦🇶"
    | "🇦🇷"
    | "🇦🇸"
    | "🇦🇹"
    | "🇦🇺"
    | "🇦🇼"
    | "🇦🇽"
    | "🇦🇿"
    | "🇧🇦"
    | "🇧🇧"
    | "🇧🇩"
    | "🇧🇪"
    | "🇧🇫"
    | "🇧🇬"
    | "🇧🇭"
    | "🇧🇮"
    | "🇧🇯"
    | "🇧🇱"
    | "🇧🇲"
    | "🇧🇳"
    | "🇧🇴"
    | "🇧🇶"
    | "🇧🇷"
    | "🇧🇸"
    | "🇧🇹"
    | "🇧🇻"
    | "🇧🇼"
    | "🇧🇾"
    | "🇧🇿"
    | "🇨🇦"
    | "🇨🇨"
    | "🇨🇩"
    | "🇨🇫"
    | "🇨🇬"
    | "🇨🇭"
    | "🇨🇮"
    | "🇨🇰"
    | "🇨🇱"
    | "🇨🇲"
    | "🇨🇳"
    | "🇨🇴"
    | "🇨🇵"
    | "🇨🇷"
    | "🇨🇺"
    | "🇨🇻"
    | "🇨🇼"
    | "🇨🇽"
    | "🇨🇾"
    | "🇨🇿"
    | "🇩🇪"
    | "🇩🇬"
    | "🇩🇯"
    | "🇩🇰"
    | "🇩🇲"
    | "🇩🇴"
    | "🇩🇿"
    | "🇪🇦"
    | "🇪🇨"
    | "🇪🇪"
    | "🇪🇬"
    | "🇪🇭"
    | "🇪🇷"
    | "🇪🇸"
    | "🇪🇹"
    | "🇪🇺"
    | "🇫🇮"
    | "🇫🇯"
    | "🇫🇰"
    | "🇫🇲"
    | "🇫🇴"
    | "🇫🇷"
    | "🇬🇦"
    | "🇬🇧"
    | "🇬🇩"
    | "🇬🇪"
    | "🇬🇫"
    | "🇬🇬"
    | "🇬🇭"
    | "🇬🇮"
    | "🇬🇱"
    | "🇬🇲"
    | "🇬🇳"
    | "🇬🇵"
    | "🇬🇶"
    | "🇬🇷"
    | "🇬🇸"
    | "🇬🇹"
    | "🇬🇺"
    | "🇬🇼"
    | "🇬🇾"
    | "🇭🇰"
    | "🇭🇲"
    | "🇭🇳"
    | "🇭🇷"
    | "🇭🇹"
    | "🇭🇺"
    | "🇮🇨"
    | "🇮🇩"
    | "🇮🇪"
    | "🇮🇱"
    | "🇮🇲"
    | "🇮🇳"
    | "🇮🇴"
    | "🇮🇶"
    | "🇮🇷"
    | "🇮🇸"
    | "🇮🇹"
    | "🇯🇪"
    | "🇯🇲"
    | "🇯🇴"
    | "🇯🇵"
    | "🇰🇪"
    | "🇰🇬"
    | "🇰🇭"
    | "🇰🇮"
    | "🇰🇲"
    | "🇰🇳"
    | "🇰🇵"
    | "🇰🇷"
    | "🇰🇼"
    | "🇰🇾"
    | "🇰🇿"
    | "🇱🇦"
    | "🇱🇧"
    | "🇱🇨"
    | "🇱🇮"
    | "🇱🇰"
    | "🇱🇷"
    | "🇱🇸"
    | "🇱🇹"
    | "🇱🇺"
    | "🇱🇻"
    | "🇱🇾"
    | "🇲🇦"
    | "🇲🇨"
    | "🇲🇩"
    | "🇲🇪"
    | "🇲🇫"
    | "🇲🇬"
    | "🇲🇭"
    | "🇲🇰"
    | "🇲🇱"
    | "🇲🇲"
    | "🇲🇳"
    | "🇲🇴"
    | "🇲🇵"
    | "🇲🇶"
    | "🇲🇷"
    | "🇲🇸"
    | "🇲🇹"
    | "🇲🇺"
    | "🇲🇻"
    | "🇲🇼"
    | "🇲🇽"
    | "🇲🇾"
    | "🇲🇿"
    | "🇳🇦"
    | "🇳🇨"
    | "🇳🇪"
    | "🇳🇫"
    | "🇳🇬"
    | "🇳🇮"
    | "🇳🇱"
    | "🇳🇴"
    | "🇳🇵"
    | "🇳🇷"
    | "🇳🇺"
    | "🇳🇿"
    | "🇴🇲"
    | "🇵🇦"
    | "🇵🇪"
    | "🇵🇫"
    | "🇵🇬"
    | "🇵🇭"
    | "🇵🇰"
    | "🇵🇱"
    | "🇵🇲"
    | "🇵🇳"
    | "🇵🇷"
    | "🇵🇸"
    | "🇵🇹"
    | "🇵🇼"
    | "🇵🇾"
    | "🇶🇦"
    | "🇷🇪"
    | "🇷🇴"
    | "🇷🇸"
    | "🇷🇺"
    | "🇷🇼"
    | "🇸🇦"
    | "🇸🇧"
    | "🇸🇨"
    | "🇸🇩"
    | "🇸🇪"
    | "🇸🇬"
    | "🇸🇭"
    | "🇸🇮"
    | "🇸🇯"
    | "🇸🇰"
    | "🇸🇱"
    | "🇸🇲"
    | "🇸🇳"
    | "🇸🇴"
    | "🇸🇷"
    | "🇸🇸"
    | "🇸🇹"
    | "🇸🇻"
    | "🇸🇽"
    | "🇸🇾"
    | "🇸🇿"
    | "🇹🇦"
    | "🇹🇨"
    | "🇹🇩"
    | "🇹🇫"
    | "🇹🇬"
    | "🇹🇭"
    | "🇹🇯"
    | "🇹🇰"
    | "🇹🇱"
    | "🇹🇲"
    | "🇹🇳"
    | "🇹🇴"
    | "🇹🇷"
    | "🇹🇹"
    | "🇹🇻"
    | "🇹🇼"
    | "🇹🇿"
    | "🇺🇦"
    | "🇺🇬"
    | "🇺🇲"
    | "🇺🇳"
    | "🇺🇸"
    | "🇺🇾"
    | "🇺🇿"
    | "🇻🇦"
    | "🇻🇨"
    | "🇻🇪"
    | "🇻🇬"
    | "🇻🇮"
    | "🇻🇳"
    | "🇻🇺"
    | "🇼🇫"
    | "🇼🇸"
    | "🇽🇰"
    | "🇾🇪"
    | "🇾🇹"
    | "🇿🇦"
    | "🇿🇲"
    | "🇿🇼"
    | "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
    | "🏴󠁧󠁢󠁳󠁣󠁴󠁿"
    | "🏴󠁧󠁢󠁷󠁬󠁳󠁿";
export type PageObjectResponse = {
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    properties: Record<
        string,
        | {
              type: "number";
              number: number | null;
              id: string;
          }
        | {
              type: "url";
              url: string | null;
              id: string;
          }
        | {
              type: "select";
              select: PartialSelectResponse | null;
              id: string;
          }
        | {
              type: "multi_select";
              multi_select: Array<PartialSelectResponse>;
              id: string;
          }
        | {
              type: "status";
              status: PartialSelectResponse | null;
              id: string;
          }
        | {
              type: "date";
              date: DateResponse | null;
              id: string;
          }
        | {
              type: "email";
              email: string | null;
              id: string;
          }
        | {
              type: "phone_number";
              phone_number: string | null;
              id: string;
          }
        | {
              type: "checkbox";
              checkbox: boolean;
              id: string;
          }
        | {
              type: "files";
              files: Array<
                  | {
                        file: {
                            url: string;
                            expiry_time: string;
                        };
                        name: StringRequest;
                        type?: "file";
                    }
                  | {
                        external: {
                            url: TextRequest;
                        };
                        name: StringRequest;
                        type?: "external";
                    }
              >;
              id: string;
          }
        | {
              type: "created_by";
              created_by: PartialUserObjectResponse | UserObjectResponse;
              id: string;
          }
        | {
              type: "created_time";
              created_time: string;
              id: string;
          }
        | {
              type: "last_edited_by";
              last_edited_by: PartialUserObjectResponse | UserObjectResponse;
              id: string;
          }
        | {
              type: "last_edited_time";
              last_edited_time: string;
              id: string;
          }
        | {
              type: "formula";
              formula: FormulaPropertyResponse;
              id: string;
          }
        | {
              type: "button";
              button: Record<string, never>;
              id: string;
          }
        | {
              type: "unique_id";
              unique_id: {
                  prefix: string | null;
                  number: number | null;
              };
              id: string;
          }
        | {
              type: "verification";
              verification:
                  | VerificationPropertyUnverifiedResponse
                  | null
                  | VerificationPropertyResponse
                  | null;
              id: string;
          }
        | {
              type: "title";
              title: Array<RichTextItemResponse>;
              id: string;
          }
        | {
              type: "rich_text";
              rich_text: Array<RichTextItemResponse>;
              id: string;
          }
        | {
              type: "people";
              people: Array<PartialUserObjectResponse | UserObjectResponse>;
              id: string;
          }
        | {
              type: "relation";
              relation: Array<{
                  id: string;
              }>;
              id: string;
          }
        | {
              type: "rollup";
              rollup:
                  | {
                        type: "number";
                        number: number | null;
                        function: RollupFunction;
                    }
                  | {
                        type: "date";
                        date: DateResponse | null;
                        function: RollupFunction;
                    }
                  | {
                        type: "array";
                        array: Array<
                            | {
                                  type: "number";
                                  number: number | null;
                              }
                            | {
                                  type: "url";
                                  url: string | null;
                              }
                            | {
                                  type: "select";
                                  select: PartialSelectResponse | null;
                              }
                            | {
                                  type: "multi_select";
                                  multi_select: Array<PartialSelectResponse>;
                              }
                            | {
                                  type: "status";
                                  status: PartialSelectResponse | null;
                              }
                            | {
                                  type: "date";
                                  date: DateResponse | null;
                              }
                            | {
                                  type: "email";
                                  email: string | null;
                              }
                            | {
                                  type: "phone_number";
                                  phone_number: string | null;
                              }
                            | {
                                  type: "checkbox";
                                  checkbox: boolean;
                              }
                            | {
                                  type: "files";
                                  files: Array<
                                      | {
                                            file: {
                                                url: string;
                                                expiry_time: string;
                                            };
                                            name: StringRequest;
                                            type?: "file";
                                        }
                                      | {
                                            external: {
                                                url: TextRequest;
                                            };
                                            name: StringRequest;
                                            type?: "external";
                                        }
                                  >;
                              }
                            | {
                                  type: "created_by";
                                  created_by:
                                      | PartialUserObjectResponse
                                      | UserObjectResponse;
                              }
                            | {
                                  type: "created_time";
                                  created_time: string;
                              }
                            | {
                                  type: "last_edited_by";
                                  last_edited_by:
                                      | PartialUserObjectResponse
                                      | UserObjectResponse;
                              }
                            | {
                                  type: "last_edited_time";
                                  last_edited_time: string;
                              }
                            | {
                                  type: "formula";
                                  formula: FormulaPropertyResponse;
                              }
                            | {
                                  type: "button";
                                  button: Record<string, never>;
                              }
                            | {
                                  type: "unique_id";
                                  unique_id: {
                                      prefix: string | null;
                                      number: number | null;
                                  };
                              }
                            | {
                                  type: "verification";
                                  verification:
                                      | VerificationPropertyUnverifiedResponse
                                      | null
                                      | VerificationPropertyResponse
                                      | null;
                              }
                            | {
                                  type: "title";
                                  title: Array<RichTextItemResponse>;
                              }
                            | {
                                  type: "rich_text";
                                  rich_text: Array<RichTextItemResponse>;
                              }
                            | {
                                  type: "people";
                                  people: Array<
                                      | PartialUserObjectResponse
                                      | UserObjectResponse
                                  >;
                              }
                            | {
                                  type: "relation";
                                  relation: Array<{
                                      id: string;
                                  }>;
                              }
                        >;
                        function: RollupFunction;
                    };
              id: string;
          }
    >;
    icon:
        | {
              type: "emoji";
              emoji: EmojiRequest;
          }
        | null
        | {
              type: "external";
              external: {
                  url: TextRequest;
              };
          }
        | null
        | {
              type: "file";
              file: {
                  url: string;
                  expiry_time: string;
              };
          }
        | null;
    cover:
        | {
              type: "external";
              external: {
                  url: TextRequest;
              };
          }
        | null
        | {
              type: "file";
              file: {
                  url: string;
                  expiry_time: string;
              };
          }
        | null;
    created_by: PartialUserObjectResponse;
    last_edited_by: PartialUserObjectResponse;
    object: "page";
    id: string;
    created_time: string;
    last_edited_time: string;
    archived: boolean;
    in_trash: boolean;
    url: string;
    public_url: string | null;
};
export type PartialPageObjectResponse = {
    object: "page";
    id: string;
};
type NumberFormat =
    | "number"
    | "number_with_commas"
    | "percent"
    | "dollar"
    | "australian_dollar"
    | "canadian_dollar"
    | "singapore_dollar"
    | "euro"
    | "pound"
    | "yen"
    | "ruble"
    | "rupee"
    | "won"
    | "yuan"
    | "real"
    | "lira"
    | "rupiah"
    | "franc"
    | "hong_kong_dollar"
    | "new_zealand_dollar"
    | "krona"
    | "norwegian_krone"
    | "mexican_peso"
    | "rand"
    | "new_taiwan_dollar"
    | "danish_krone"
    | "zloty"
    | "baht"
    | "forint"
    | "koruna"
    | "shekel"
    | "chilean_peso"
    | "philippine_peso"
    | "dirham"
    | "colombian_peso"
    | "riyal"
    | "ringgit"
    | "leu"
    | "argentine_peso"
    | "uruguayan_peso"
    | "peruvian_sol";
type PropertyDescriptionRequest = string;
type NumberDatabasePropertyConfigResponse = {
    type: "number";
    number: {
        format: NumberFormat;
    };
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type FormulaDatabasePropertyConfigResponse = {
    type: "formula";
    formula: {
        expression: string;
    };
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type SelectPropertyResponse = {
    id: StringRequest;
    name: StringRequest;
    color: SelectColor;
    description: StringRequest | null;
};
type SelectDatabasePropertyConfigResponse = {
    type: "select";
    select: {
        options: Array<SelectPropertyResponse>;
    };
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type MultiSelectDatabasePropertyConfigResponse = {
    type: "multi_select";
    multi_select: {
        options: Array<SelectPropertyResponse>;
    };
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type StatusPropertyResponse = {
    id: StringRequest;
    name: StringRequest;
    color: SelectColor;
    description: StringRequest | null;
};
type StatusDatabasePropertyConfigResponse = {
    type: "status";
    status: {
        options: Array<StatusPropertyResponse>;
        groups: Array<{
            id: StringRequest;
            name: StringRequest;
            color: SelectColor;
            option_ids: Array<string>;
        }>;
    };
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type SinglePropertyDatabasePropertyRelationConfigResponse = {
    type: "single_property";
    single_property: EmptyObject;
    database_id: IdRequest;
};
type DualPropertyDatabasePropertyRelationConfigResponse = {
    type: "dual_property";
    dual_property: {
        synced_property_id: StringRequest;
        synced_property_name: StringRequest;
    };
    database_id: IdRequest;
};
type DatabasePropertyRelationConfigResponse =
    | SinglePropertyDatabasePropertyRelationConfigResponse
    | DualPropertyDatabasePropertyRelationConfigResponse;
type RelationDatabasePropertyConfigResponse = {
    type: "relation";
    relation: DatabasePropertyRelationConfigResponse;
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type RollupDatabasePropertyConfigResponse = {
    type: "rollup";
    rollup: {
        rollup_property_name: string;
        relation_property_name: string;
        rollup_property_id: string;
        relation_property_id: string;
        function: RollupFunction;
    };
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type UniqueIdDatabasePropertyConfigResponse = {
    type: "unique_id";
    unique_id: {
        prefix: string | null;
    };
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type TitleDatabasePropertyConfigResponse = {
    type: "title";
    title: EmptyObject;
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type RichTextDatabasePropertyConfigResponse = {
    type: "rich_text";
    rich_text: EmptyObject;
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type UrlDatabasePropertyConfigResponse = {
    type: "url";
    url: EmptyObject;
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type PeopleDatabasePropertyConfigResponse = {
    type: "people";
    people: EmptyObject;
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type FilesDatabasePropertyConfigResponse = {
    type: "files";
    files: EmptyObject;
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type EmailDatabasePropertyConfigResponse = {
    type: "email";
    email: EmptyObject;
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type PhoneNumberDatabasePropertyConfigResponse = {
    type: "phone_number";
    phone_number: EmptyObject;
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type DateDatabasePropertyConfigResponse = {
    type: "date";
    date: EmptyObject;
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type CheckboxDatabasePropertyConfigResponse = {
    type: "checkbox";
    checkbox: EmptyObject;
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type CreatedByDatabasePropertyConfigResponse = {
    type: "created_by";
    created_by: EmptyObject;
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type CreatedTimeDatabasePropertyConfigResponse = {
    type: "created_time";
    created_time: EmptyObject;
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type LastEditedByDatabasePropertyConfigResponse = {
    type: "last_edited_by";
    last_edited_by: EmptyObject;
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type LastEditedTimeDatabasePropertyConfigResponse = {
    type: "last_edited_time";
    last_edited_time: EmptyObject;
    id: string;
    name: string;
    description: PropertyDescriptionRequest | null;
};
type DatabasePropertyConfigResponse =
    | NumberDatabasePropertyConfigResponse
    | FormulaDatabasePropertyConfigResponse
    | SelectDatabasePropertyConfigResponse
    | MultiSelectDatabasePropertyConfigResponse
    | StatusDatabasePropertyConfigResponse
    | RelationDatabasePropertyConfigResponse
    | RollupDatabasePropertyConfigResponse
    | UniqueIdDatabasePropertyConfigResponse
    | TitleDatabasePropertyConfigResponse
    | RichTextDatabasePropertyConfigResponse
    | UrlDatabasePropertyConfigResponse
    | PeopleDatabasePropertyConfigResponse
    | FilesDatabasePropertyConfigResponse
    | EmailDatabasePropertyConfigResponse
    | PhoneNumberDatabasePropertyConfigResponse
    | DateDatabasePropertyConfigResponse
    | CheckboxDatabasePropertyConfigResponse
    | CreatedByDatabasePropertyConfigResponse
    | CreatedTimeDatabasePropertyConfigResponse
    | LastEditedByDatabasePropertyConfigResponse
    | LastEditedTimeDatabasePropertyConfigResponse;
export type PartialDatabaseObjectResponse = {
    object: "database";
    id: string;
    properties: Record<string, DatabasePropertyConfigResponse>;
};
export type DatabaseObjectResponse = {
    title: Array<RichTextItemResponse>;
    description: Array<RichTextItemResponse>;
    icon:
        | {
              type: "emoji";
              emoji: EmojiRequest;
          }
        | null
        | {
              type: "external";
              external: {
                  url: TextRequest;
              };
          }
        | null
        | {
              type: "file";
              file: {
                  url: string;
                  expiry_time: string;
              };
          }
        | null;
    cover:
        | {
              type: "external";
              external: {
                  url: TextRequest;
              };
          }
        | null
        | {
              type: "file";
              file: {
                  url: string;
                  expiry_time: string;
              };
          }
        | null;
    properties: Record<string, DatabasePropertyConfigResponse>;
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    created_by: PartialUserObjectResponse;
    last_edited_by: PartialUserObjectResponse;
    is_inline: boolean;
    object: "database";
    id: string;
    created_time: string;
    last_edited_time: string;
    archived: boolean;
    in_trash: boolean;
    url: string;
    public_url: string | null;
};
export type PartialBlockObjectResponse = {
    object: "block";
    id: string;
};
type ApiColor =
    | "default"
    | "gray"
    | "brown"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "red"
    | "gray_background"
    | "brown_background"
    | "orange_background"
    | "yellow_background"
    | "green_background"
    | "blue_background"
    | "purple_background"
    | "pink_background"
    | "red_background";
export type ParagraphBlockObjectResponse = {
    type: "paragraph";
    paragraph: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type Heading1BlockObjectResponse = {
    type: "heading_1";
    heading_1: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
        is_toggleable: boolean;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type Heading2BlockObjectResponse = {
    type: "heading_2";
    heading_2: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
        is_toggleable: boolean;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type Heading3BlockObjectResponse = {
    type: "heading_3";
    heading_3: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
        is_toggleable: boolean;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type BulletedListItemBlockObjectResponse = {
    type: "bulleted_list_item";
    bulleted_list_item: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type NumberedListItemBlockObjectResponse = {
    type: "numbered_list_item";
    numbered_list_item: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type QuoteBlockObjectResponse = {
    type: "quote";
    quote: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type ToDoBlockObjectResponse = {
    type: "to_do";
    to_do: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
        checked: boolean;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type ToggleBlockObjectResponse = {
    type: "toggle";
    toggle: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type TemplateBlockObjectResponse = {
    type: "template";
    template: {
        rich_text: Array<RichTextItemResponse>;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type SyncedBlockBlockObjectResponse = {
    type: "synced_block";
    synced_block: {
        synced_from: {
            type: "block_id";
            block_id: IdRequest;
        } | null;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type ChildPageBlockObjectResponse = {
    type: "child_page";
    child_page: {
        title: string;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type ChildDatabaseBlockObjectResponse = {
    type: "child_database";
    child_database: {
        title: string;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type EquationBlockObjectResponse = {
    type: "equation";
    equation: {
        expression: string;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
type LanguageRequest =
    | "abap"
    | "agda"
    | "arduino"
    | "assembly"
    | "bash"
    | "basic"
    | "bnf"
    | "c"
    | "c#"
    | "c++"
    | "clojure"
    | "coffeescript"
    | "coq"
    | "css"
    | "dart"
    | "dhall"
    | "diff"
    | "docker"
    | "ebnf"
    | "elixir"
    | "elm"
    | "erlang"
    | "f#"
    | "flow"
    | "fortran"
    | "gherkin"
    | "glsl"
    | "go"
    | "graphql"
    | "groovy"
    | "haskell"
    | "html"
    | "idris"
    | "java"
    | "javascript"
    | "json"
    | "julia"
    | "kotlin"
    | "latex"
    | "less"
    | "lisp"
    | "livescript"
    | "llvm ir"
    | "lua"
    | "makefile"
    | "markdown"
    | "markup"
    | "matlab"
    | "mathematica"
    | "mermaid"
    | "nix"
    | "notion formula"
    | "objective-c"
    | "ocaml"
    | "pascal"
    | "perl"
    | "php"
    | "plain text"
    | "powershell"
    | "prolog"
    | "protobuf"
    | "purescript"
    | "python"
    | "r"
    | "racket"
    | "reason"
    | "ruby"
    | "rust"
    | "sass"
    | "scala"
    | "scheme"
    | "scss"
    | "shell"
    | "solidity"
    | "sql"
    | "swift"
    | "toml"
    | "typescript"
    | "vb.net"
    | "verilog"
    | "vhdl"
    | "visual basic"
    | "webassembly"
    | "xml"
    | "yaml"
    | "java/c/c++/c#";
export type CodeBlockObjectResponse = {
    type: "code";
    code: {
        rich_text: Array<RichTextItemResponse>;
        caption: Array<RichTextItemResponse>;
        language: LanguageRequest;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type CalloutBlockObjectResponse = {
    type: "callout";
    callout: {
        rich_text: Array<RichTextItemResponse>;
        color: ApiColor;
        icon:
            | {
                  type: "emoji";
                  emoji: EmojiRequest;
              }
            | null
            | {
                  type: "external";
                  external: {
                      url: TextRequest;
                  };
              }
            | null
            | {
                  type: "file";
                  file: {
                      url: string;
                      expiry_time: string;
                  };
              }
            | null;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type DividerBlockObjectResponse = {
    type: "divider";
    divider: EmptyObject;
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type BreadcrumbBlockObjectResponse = {
    type: "breadcrumb";
    breadcrumb: EmptyObject;
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type TableOfContentsBlockObjectResponse = {
    type: "table_of_contents";
    table_of_contents: {
        color: ApiColor;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type ColumnListBlockObjectResponse = {
    type: "column_list";
    column_list: EmptyObject;
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type ColumnBlockObjectResponse = {
    type: "column";
    column: EmptyObject;
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type LinkToPageBlockObjectResponse = {
    type: "link_to_page";
    link_to_page:
        | {
              type: "page_id";
              page_id: IdRequest;
          }
        | {
              type: "database_id";
              database_id: IdRequest;
          }
        | {
              type: "comment_id";
              comment_id: IdRequest;
          };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type TableBlockObjectResponse = {
    type: "table";
    table: {
        has_column_header: boolean;
        has_row_header: boolean;
        table_width: number;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type TableRowBlockObjectResponse = {
    type: "table_row";
    table_row: {
        cells: Array<Array<RichTextItemResponse>>;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type EmbedBlockObjectResponse = {
    type: "embed";
    embed: {
        url: string;
        caption: Array<RichTextItemResponse>;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type BookmarkBlockObjectResponse = {
    type: "bookmark";
    bookmark: {
        url: string;
        caption: Array<RichTextItemResponse>;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type ImageBlockObjectResponse = {
    type: "image";
    image:
        | {
              type: "external";
              external: {
                  url: TextRequest;
              };
              caption: Array<RichTextItemResponse>;
          }
        | {
              type: "file";
              file: {
                  url: string;
                  expiry_time: string;
              };
              caption: Array<RichTextItemResponse>;
          };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type VideoBlockObjectResponse = {
    type: "video";
    video:
        | {
              type: "external";
              external: {
                  url: TextRequest;
              };
              caption: Array<RichTextItemResponse>;
          }
        | {
              type: "file";
              file: {
                  url: string;
                  expiry_time: string;
              };
              caption: Array<RichTextItemResponse>;
          };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type PdfBlockObjectResponse = {
    type: "pdf";
    pdf:
        | {
              type: "external";
              external: {
                  url: TextRequest;
              };
              caption: Array<RichTextItemResponse>;
          }
        | {
              type: "file";
              file: {
                  url: string;
                  expiry_time: string;
              };
              caption: Array<RichTextItemResponse>;
          };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type FileBlockObjectResponse = {
    type: "file";
    file:
        | {
              type: "external";
              external: {
                  url: TextRequest;
              };
              caption: Array<RichTextItemResponse>;
              name: string;
          }
        | {
              type: "file";
              file: {
                  url: string;
                  expiry_time: string;
              };
              caption: Array<RichTextItemResponse>;
              name: string;
          };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type AudioBlockObjectResponse = {
    type: "audio";
    audio:
        | {
              type: "external";
              external: {
                  url: TextRequest;
              };
              caption: Array<RichTextItemResponse>;
          }
        | {
              type: "file";
              file: {
                  url: string;
                  expiry_time: string;
              };
              caption: Array<RichTextItemResponse>;
          };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type LinkPreviewBlockObjectResponse = {
    type: "link_preview";
    link_preview: {
        url: TextRequest;
    };
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type UnsupportedBlockObjectResponse = {
    type: "unsupported";
    unsupported: EmptyObject;
    parent:
        | {
              type: "database_id";
              database_id: string;
          }
        | {
              type: "page_id";
              page_id: string;
          }
        | {
              type: "block_id";
              block_id: string;
          }
        | {
              type: "workspace";
              workspace: true;
          };
    object: "block";
    id: string;
    created_time: string;
    created_by: PartialUserObjectResponse;
    last_edited_time: string;
    last_edited_by: PartialUserObjectResponse;
    has_children: boolean;
    archived: boolean;
    in_trash: boolean;
};
export type BlockObjectResponse =
    | ParagraphBlockObjectResponse
    | Heading1BlockObjectResponse
    | Heading2BlockObjectResponse
    | Heading3BlockObjectResponse
    | BulletedListItemBlockObjectResponse
    | NumberedListItemBlockObjectResponse
    | QuoteBlockObjectResponse
    | ToDoBlockObjectResponse
    | ToggleBlockObjectResponse
    | TemplateBlockObjectResponse
    | SyncedBlockBlockObjectResponse
    | ChildPageBlockObjectResponse
    | ChildDatabaseBlockObjectResponse
    | EquationBlockObjectResponse
    | CodeBlockObjectResponse
    | CalloutBlockObjectResponse
    | DividerBlockObjectResponse
    | BreadcrumbBlockObjectResponse
    | TableOfContentsBlockObjectResponse
    | ColumnListBlockObjectResponse
    | ColumnBlockObjectResponse
    | LinkToPageBlockObjectResponse
    | TableBlockObjectResponse
    | TableRowBlockObjectResponse
    | EmbedBlockObjectResponse
    | BookmarkBlockObjectResponse
    | ImageBlockObjectResponse
    | VideoBlockObjectResponse
    | PdfBlockObjectResponse
    | FileBlockObjectResponse
    | AudioBlockObjectResponse
    | LinkPreviewBlockObjectResponse
    | UnsupportedBlockObjectResponse;
