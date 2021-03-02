// for the near future
//https://verifalia.com/email-verification-api

const emailExtensions = {
    "AMERICANEXPRESS" : true,
    "AMERICANFAMILY" : true,
    "AFAMILYCOMPANY" : true,
    "COOKINGCHANNEL" : true,
    "BANANAREPUBLIC" : true,
    "CANCERRESEARCH" : true,
    "CONSTRUCTION" : true,
    "CONTRACTORS" : true,
    "ACCOUNTANTS" : true,
    "BRIDGESTONE" : true,
    "BARCLAYCARD" : true,
    "BLACKFRIDAY" : true,
    "CALVINKLEIN" : true,
    "BLOCKBUSTER" : true,
    "CREDITUNION" : true,
    "BASKETBALL" : true,
    "ASSOCIATES" : true,
    "BOEHRINGER" : true,
    "BNPPARIBAS" : true,
    "CAPITALONE" : true,
    "ACCOUNTANT" : true,
    "CUISINELLA" : true,
    "CONSULTING" : true,
    "CREDITCARD" : true,
    "APARTMENTS" : true,
    "ACCENTURE" : true,
    "BARCELONA" : true,
    "ANALYTICS" : true,
    "AQUARELLE" : true,
    "AMSTERDAM" : true,
    "ALFAROMEO" : true,
    "COMMUNITY" : true,
    "ALLFINANZ" : true,
    "BLOOMBERG" : true,
    "CHRISTMAS" : true,
    "ABUDHABI" : true,
    "BARCLAYS" : true,
    "BAREFOOT" : true,
    "BARGAINS" : true,
    "BASEBALL" : true,
    "BRADESCO" : true,
    "BROADWAY" : true,
    "COMMBANK" : true,
    "AIRFORCE" : true,
    "ALLSTATE" : true,
    "BUSINESS" : true,
    "ATTORNEY" : true,
    "BOUTIQUE" : true,
    "BUILDERS" : true,
    "CIPRIANI" : true,
    "BUDAPEST" : true,
    "BRUSSELS" : true,
    "CATERING" : true,
    "CLEANING" : true,
    "COMPUTER" : true,
    "CITYEATS" : true,
    "CAPETOWN" : true,
    "CLOTHING" : true,
    "CLINIQUE" : true,
    "CATHOLIC" : true,
    "BESTBUY" : true,
    "COMPANY" : true,
    "CARAVAN" : true,
    "COMPARE" : true,
    "CRICKET" : true,
    "BUGATTI" : true,
    "CAREERS" : true,
    "COMCAST" : true,
    "COLLEGE" : true,
    "ACADEMY" : true,
    "CONTACT" : true,
    "ABOGADO" : true,
    "AGAKHAN" : true,
    "COOKING" : true,
    "CLUBMED" : true,
    "BROTHER" : true,
    "AUSPOST" : true,
    "AUCTION" : true,
    "AUDIBLE" : true,
    "ATHLETA" : true,
    "CRUISES" : true,
    "AVIANCA" : true,
    "CORSICA" : true,
    "COUNTRY" : true,
    "COUPONS" : true,
    "COURSES" : true,
    "CHANNEL" : true,
    "CHINTAI" : true,
    "CHARITY" : true,
    "ANDROID" : true,
    "BANAMEX" : true,
    "ALIBABA" : true,
    "BAUHAUS" : true,
    "BENTLEY" : true,
    "COLOGNE" : true,
    "CAPITAL" : true,
    "BOOKING" : true,
    "CITADEL" : true,
    "ABARTH" : true,
    "ABBOTT" : true,
    "AIRBUS" : true,
    "ABBVIE" : true,
    "BROKER" : true,
    "BOSTON" : true,
    "AGENCY" : true,
    "AFRICA" : true,
    "BERLIN" : true,
    "COFFEE" : true,
    "CHANEL" : true,
    "ALSACE" : true,
    "CONDOS" : true,
    "ALSTOM" : true,
    "ARAMCO" : true,
    "AMAZON" : true,
    "CENTER" : true,
    "CAMERA" : true,
    "AIRTEL" : true,
    "BOSTIK" : true,
    "AUTHOR" : true,
    "ANQUAN" : true,
    "CREDIT" : true,
    "BHARTI" : true,
    "BEAUTY" : true,
    "CAREER" : true,
    "CLINIC" : true,
    "CRUISE" : true,
    "COUPON" : true,
    "BAYERN" : true,
    "CHURCH" : true,
    "CASEIH" : true,
    "CHROME" : true,
    "ALIPAY" : true,
    "CIRCLE" : true,
    "CASINO" : true,
    "COMSEC" : true,
    "CLAIMS" : true,
    "AMFAM" : true,
    "CLOUD" : true,
    "BEATS" : true,
    "ADULT" : true,
    "CLICK" : true,
    "APPLE" : true,
    "BOSCH" : true,
    "CODES" : true,
    "CISCO" : true,
    "CANON" : true,
    "ACTOR" : true,
    "BUILD" : true,
    "ARCHI" : true,
    "AMICA" : true,
    "AETNA" : true,
    "AUTOS" : true,
    "CHASE" : true,
    "BIBLE" : true,
    "COACH" : true,
    "BINGO" : true,
    "AZURE" : true,
    "CROWN" : true,
    "CYMRU" : true,
    "CARDS" : true,
    "CHEAP" : true,
    "BLACK" : true,
    "AUDIO" : true,
    "BOATS" : true,
    "BAIDU" : true,
    "CITIC" : true,
    "AERO" : true,
    "CLUB" : true,
    "CERN" : true,
    "AKDN" : true,
    "ALLY" : true,
    "AARP" : true,
    "BOND" : true,
    "BOOK" : true,
    "BUZZ" : true,
    "ADAC" : true,
    "CITY" : true,
    "ABLE" : true,
    "COOL" : true,
    "BABY" : true,
    "COOP" : true,
    "AMEX" : true,
    "ARAB" : true,
    "ARMY" : true,
    "ARPA" : true,
    "ASIA" : true,
    "ARTE" : true,
    "ASDA" : true,
    "CASE" : true,
    "AUDI" : true,
    "BAND" : true,
    "AUTO" : true,
    "BANK" : true,
    "BLOG" : true,
    "CBRE" : true,
    "BLUE" : true,
    "BEER" : true,
    "CASH" : true,
    "BBVA" : true,
    "CAFE" : true,
    "CHAT" : true,
    "BING" : true,
    "CARE" : true,
    "CARS" : true,
    "CITI" : true,
    "CALL" : true,
    "CASA" : true,
    "BIKE" : true,
    "CAMP" : true,
    "CYOU" : true,
    "BEST" : true,
    "BOFA" : true,
    "BCG" : true,
    "BCN" : true,
    "CRS" : true,
    "AFL" : true,
    "BET" : true,
    "BOO" : true,
    "AAA" : true,
    "BID" : true,
    "BIO" : true,
    "BMW" : true,
    "BIZ" : true,
    "AWS" : true,
    "BUY" : true,
    "COM" : true,
    "AEG" : true,
    "CEO" : true,
    "BOT" : true,
    "ACO" : true,
    "CBA" : true,
    "CFA" : true,
    "CFD" : true,
    "AOL" : true,
    "CPA" : true,
    "ABB" : true,
    "BMS" : true,
    "ADS" : true,
    "BOX" : true,
    "BOM" : true,
    "AIG" : true,
    "AXA" : true,
    "BZH" : true,
    "CAB" : true,
    "CAL" : true,
    "CAM" : true,
    "CAR" : true,
    "ART" : true,
    "BBC" : true,
    "ABC" : true,
    "CAT" : true,
    "CBN" : true,
    "ANZ" : true,
    "CSC" : true,
    "BAR" : true,
    "CBS" : true,
    "BBT" : true,
    "APP" : true,
    "CC" : true,
    "CD" : true,
    "CI" : true,
    "CK" : true,
    "CM" : true,
    "CN" : true,
    "CO" : true,
    "CR" : true,
    "CU" : true,
    "CW" : true,
    "CX" : true,
    "CY" : true,
    "AC" : true,
    "CG" : true,
    "CL" : true,
    "BM" : true,
    "BN" : true,
    "AQ" : true,
    "CF" : true,
    "AR" : true,
    "BO" : true,
    "BR" : true,
    "BS" : true,
    "BD" : true,
    "BT" : true,
    "AE" : true,
    "CH" : true,
    "AX" : true,
    "BB" : true,
    "AZ" : true,
    "AT" : true,
    "AU" : true,
    "BZ" : true,
    "AM" : true,
    "AL" : true,
    "BA" : true,
    "BJ" : true,
    "AW" : true,
    "AO" : true,
    "AS" : true,
    "BE" : true,
    "BG" : true,
    "BH" : true,
    "AF" : true,
    "AG" : true,
    "AI" : true,
    "BI" : true,
    "BV" : true,
    "BW" : true,
    "CV" : true,
    "BY" : true,
    "AD" : true,
    "CZ" : true,
    "CA" : true,
    "DABUR" : true,
    "DAD" : true,
    "DANCE" : true,
    "BF" : true,
    "DATA" : true,
    "DATE" : true,
    "DATING" : true,
    "DATSUN" : true,
    "DAY" : true,
    "DCLK" : true,
    "DDS" : true,
    "DE" : true,
    "DEAL" : true,
    "DEALER" : true,
    "DEALS" : true,
    "DEGREE" : true,
    "DELIVERY" : true,
    "DELL" : true,
    "DELOITTE" : true,
    "DELTA" : true,
    "DEMOCRAT" : true,
    "DENTAL" : true,
    "DENTIST" : true,
    "DESI" : true,
    "DESIGN" : true,
    "DEV" : true,
    "DHL" : true,
    "DIAMONDS" : true,
    "DIET" : true,
    "DIGITAL" : true,
    "DIRECT" : true,
    "DIRECTORY" : true,
    "DISCOUNT" : true,
    "DISCOVER" : true,
    "DISH" : true,
    "DIY" : true,
    "DJ" : true,
    "DK" : true,
    "DM" : true,
    "DNP" : true,
    "DO" : true,
    "DOCS" : true,
    "DOCTOR" : true,
    "DOG" : true,
    "DOMAINS" : true,
    "DOT" : true,
    "DOWNLOAD" : true,
    "DRIVE" : true,
    "DTV" : true,
    "DUBAI" : true,
    "DUCK" : true,
    "DUNLOP" : true,
    "DUPONT" : true,
    "DURBAN" : true,
    "DVAG" : true,
    "DVR" : true,
    "DZ" : true,
    "EARTH" : true,
    "EAT" : true,
    "EC" : true,
    "ECO" : true,
    "EDEKA" : true,
    "EDU" : true,
    "EDUCATION" : true,
    "EE" : true,
    "EG" : true,
    "EMAIL" : true,
    "EMERCK" : true,
    "ENERGY" : true,
    "ENGINEER" : true,
    "ENGINEERING" : true,
    "ENTERPRISES" : true,
    "EPSON" : true,
    "EQUIPMENT" : true,
    "ER" : true,
    "ERICSSON" : true,
    "ERNI" : true,
    "ES" : true,
    "ESQ" : true,
    "ESTATE" : true,
    "ET" : true,
    "ETISALAT" : true,
    "EU" : true,
    "EUROVISION" : true,
    "EUS" : true,
    "EVENTS" : true,
    "EXCHANGE" : true,
    "EXPERT" : true,
    "EXPOSED" : true,
    "EXPRESS" : true,
    "EXTRASPACE" : true,
    "FAGE" : true,
    "FAIL" : true,
    "FAIRWINDS" : true,
    "FAITH" : true,
    "FAMILY" : true,
    "FAN" : true,
    "FANS" : true,
    "FARM" : true,
    "FARMERS" : true,
    "FASHION" : true,
    "FAST" : true,
    "FEDEX" : true,
    "FEEDBACK" : true,
    "FERRARI" : true,
    "FERRERO" : true,
    "FI" : true,
    "FIAT" : true,
    "FIDELITY" : true,
    "FIDO" : true,
    "FILM" : true,
    "FINAL" : true,
    "FINANCE" : true,
    "FINANCIAL" : true,
    "FIRE" : true,
    "FIRESTONE" : true,
    "FIRMDALE" : true,
    "FISH" : true,
    "FISHING" : true,
    "FIT" : true,
    "FITNESS" : true,
    "FJ" : true,
    "FK" : true,
    "FLICKR" : true,
    "FLIGHTS" : true,
    "FLIR" : true,
    "FLORIST" : true,
    "FLOWERS" : true,
    "FLY" : true,
    "FM" : true,
    "FO" : true,
    "FOO" : true,
    "FOOD" : true,
    "FOODNETWORK" : true,
    "FOOTBALL" : true,
    "FORD" : true,
    "FOREX" : true,
    "FORSALE" : true,
    "FORUM" : true,
    "FOUNDATION" : true,
    "FOX" : true,
    "FR" : true,
    "FREE" : true,
    "FRESENIUS" : true,
    "FRL" : true,
    "FROGANS" : true,
    "FRONTDOOR" : true,
    "FRONTIER" : true,
    "FTR" : true,
    "FUJITSU" : true,
    "FUJIXEROX" : true,
    "FUN" : true,
    "FUND" : true,
    "FURNITURE" : true,
    "FUTBOL" : true,
    "FYI" : true,
    "GA" : true,
    "GAL" : true,
    "GALLERY" : true,
    "GALLO" : true,
    "GALLUP" : true,
    "GAME" : true,
    "GAMES" : true,
    "GAP" : true,
    "GARDEN" : true,
    "GAY" : true,
    "GB" : true,
    "GBIZ" : true,
    "GD" : true,
    "GDN" : true,
    "GE" : true,
    "GEA" : true,
    "GENT" : true,
    "GENTING" : true,
    "GEORGE" : true,
    "GF" : true,
    "GG" : true,
    "GGEE" : true,
    "GH" : true,
    "GI" : true,
    "GIFT" : true,
    "GIFTS" : true,
    "GIVES" : true,
    "GIVING" : true,
    "GL" : true,
    "GLADE" : true,
    "GLASS" : true,
    "GLE" : true,
    "GLOBAL" : true,
    "GLOBO" : true,
    "GM" : true,
    "GMAIL" : true,
    "GMBH" : true,
    "GMO" : true,
    "GMX" : true,
    "GN" : true,
    "GODADDY" : true,
    "GOLD" : true,
    "GOLDPOINT" : true,
    "GOLF" : true,
    "GOO" : true,
    "GOODYEAR" : true,
    "GOOG" : true,
    "GOOGLE" : true,
    "GOP" : true,
    "GOT" : true,
    "GOV" : true,
    "GP" : true,
    "GQ" : true,
    "GR" : true,
    "GRAINGER" : true,
    "GRAPHICS" : true,
    "GRATIS" : true,
    "GREEN" : true,
    "GRIPE" : true,
    "GROCERY" : true,
    "GROUP" : true,
    "GS" : true,
    "GT" : true,
    "GU" : true,
    "GUARDIAN" : true,
    "GUCCI" : true,
    "GUGE" : true,
    "GUIDE" : true,
    "GUITARS" : true,
    "GURU" : true,
    "GW" : true,
    "GY" : true,
    "HAIR" : true,
    "HAMBURG" : true,
    "HANGOUT" : true,
    "HAUS" : true,
    "HBO" : true,
    "HDFC" : true,
    "HDFCBANK" : true,
    "HEALTH" : true,
    "HEALTHCARE" : true,
    "HELP" : true,
    "HELSINKI" : true,
    "HERE" : true,
    "HERMES" : true,
    "HGTV" : true,
    "HIPHOP" : true,
    "HISAMITSU" : true,
    "HITACHI" : true,
    "HIV" : true,
    "HK" : true,
    "HKT" : true,
    "HM" : true,
    "HN" : true,
    "HOCKEY" : true,
    "HOLDINGS" : true,
    "HOLIDAY" : true,
    "HOMEDEPOT" : true,
    "HOMEGOODS" : true,
    "HOMES" : true,
    "HOMESENSE" : true,
    "HONDA" : true,
    "HORSE" : true,
    "HOSPITAL" : true,
    "HOST" : true,
    "HOSTING" : true,
    "HOT" : true,
    "HOTELES" : true,
    "HOTELS" : true,
    "HOTMAIL" : true,
    "HOUSE" : true,
    "HOW" : true,
    "HR" : true,
    "HSBC" : true,
    "HT" : true,
    "HU" : true,
    "HUGHES" : true,
    "HYATT" : true,
    "HYUNDAI" : true,
    "IBM" : true,
    "ICBC" : true,
    "ICE" : true,
    "ICU" : true,
    "ID" : true,
    "IE" : true,
    "IEEE" : true,
    "IFM" : true,
    "IKANO" : true,
    "IL" : true,
    "IM" : true,
    "IMAMAT" : true,
    "IMDB" : true,
    "IMMO" : true,
    "IMMOBILIEN" : true,
    "IN" : true,
    "INC" : true,
    "INDUSTRIES" : true,
    "INFINITI" : true,
    "INFO" : true,
    "ING" : true,
    "INK" : true,
    "INSTITUTE" : true,
    "INSURANCE" : true,
    "INSURE" : true,
    "INT" : true,
    "INTERNATIONAL" : true,
    "INTUIT" : true,
    "INVESTMENTS" : true,
    "IO" : true,
    "IPIRANGA" : true,
    "IQ" : true,
    "IR" : true,
    "IRISH" : true,
    "IS" : true,
    "ISMAILI" : true,
    "IST" : true,
    "ISTANBUL" : true,
    "IT" : true,
    "ITAU" : true,
    "ITV" : true,
    "IVECO" : true,
    "JAGUAR" : true,
    "JAVA" : true,
    "JCB" : true,
    "JE" : true,
    "JEEP" : true,
    "JETZT" : true,
    "JEWELRY" : true,
    "JIO" : true,
    "JLL" : true,
    "JM" : true,
    "JMP" : true,
    "JNJ" : true,
    "JO" : true,
    "JOBS" : true,
    "JOBURG" : true,
    "JOT" : true,
    "JOY" : true,
    "JP" : true,
    "JPMORGAN" : true,
    "JPRS" : true,
    "JUEGOS" : true,
    "JUNIPER" : true,
    "KAUFEN" : true,
    "KDDI" : true,
    "KE" : true,
    "KERRYHOTELS" : true,
    "KERRYLOGISTICS" : true,
    "KERRYPROPERTIES" : true,
    "KFH" : true,
    "KG" : true,
    "KH" : true,
    "KI" : true,
    "KIA" : true,
    "KIM" : true,
    "KINDER" : true,
    "KINDLE" : true,
    "KITCHEN" : true,
    "KIWI" : true,
    "KM" : true,
    "KN" : true,
    "KOELN" : true,
    "KOMATSU" : true,
    "KOSHER" : true,
    "KP" : true,
    "KPMG" : true,
    "KPN" : true,
    "KR" : true,
    "KRD" : true,
    "KRED" : true,
    "KUOKGROUP" : true,
    "KW" : true,
    "KY" : true,
    "KYOTO" : true,
    "KZ" : true,
    "LA" : true,
    "LACAIXA" : true,
    "LAMBORGHINI" : true,
    "LAMER" : true,
    "LANCASTER" : true,
    "LANCIA" : true,
    "LAND" : true,
    "LANDROVER" : true,
    "LANXESS" : true,
    "LASALLE" : true,
    "LAT" : true,
    "LATINO" : true,
    "LATROBE" : true,
    "LAW" : true,
    "LAWYER" : true,
    "LB" : true,
    "LC" : true,
    "LDS" : true,
    "LEASE" : true,
    "LECLERC" : true,
    "LEFRAK" : true,
    "LEGAL" : true,
    "LEGO" : true,
    "LEXUS" : true,
    "LGBT" : true,
    "LI" : true,
    "LIDL" : true,
    "LIFE" : true,
    "LIFEINSURANCE" : true,
    "LIFESTYLE" : true,
    "LIGHTING" : true,
    "LIKE" : true,
    "LILLY" : true,
    "LIMITED" : true,
    "LIMO" : true,
    "LINCOLN" : true,
    "LINDE" : true,
    "LINK" : true,
    "LIPSY" : true,
    "LIVE" : true,
    "LIVING" : true,
    "LIXIL" : true,
    "LK" : true,
    "LLC" : true,
    "LLP" : true,
    "LOAN" : true,
    "LOANS" : true,
    "LOCKER" : true,
    "LOCUS" : true,
    "LOFT" : true,
    "LOL" : true,
    "LONDON" : true,
    "LOTTE" : true,
    "LOTTO" : true,
    "LOVE" : true,
    "LPL" : true,
    "LPLFINANCIAL" : true,
    "LR" : true,
    "LS" : true,
    "LT" : true,
    "LTD" : true,
    "LTDA" : true,
    "LU" : true,
    "LUNDBECK" : true,
    "LUXE" : true,
    "LUXURY" : true,
    "LV" : true,
    "LY" : true,
    "MA" : true,
    "MACYS" : true,
    "MADRID" : true,
    "MAIF" : true,
    "MAISON" : true,
    "MAKEUP" : true,
    "MAN" : true,
    "MANAGEMENT" : true,
    "MANGO" : true,
    "MAP" : true,
    "MARKET" : true,
    "MARKETING" : true,
    "MARKETS" : true,
    "MARRIOTT" : true,
    "MARSHALLS" : true,
    "MASERATI" : true,
    "MATTEL" : true,
    "MBA" : true,
    "MC" : true,
    "MCKINSEY" : true,
    "MD" : true,
    "ME" : true,
    "MED" : true,
    "MEDIA" : true,
    "MEET" : true,
    "MELBOURNE" : true,
    "MEME" : true,
    "MEMORIAL" : true,
    "MEN" : true,
    "MENU" : true,
    "MERCKMSD" : true,
    "MG" : true,
    "MH" : true,
    "MIAMI" : true,
    "MICROSOFT" : true,
    "MIL" : true,
    "MINI" : true,
    "MINT" : true,
    "MIT" : true,
    "MITSUBISHI" : true,
    "MK" : true,
    "ML" : true,
    "MLB" : true,
    "MLS" : true,
    "MM" : true,
    "MMA" : true,
    "MN" : true,
    "MO" : true,
    "MOBI" : true,
    "MOBILE" : true,
    "MODA" : true,
    "MOE" : true,
    "MOI" : true,
    "MOM" : true,
    "MONASH" : true,
    "MONEY" : true,
    "MONSTER" : true,
    "MORMON" : true,
    "MORTGAGE" : true,
    "MOSCOW" : true,
    "MOTO" : true,
    "MOTORCYCLES" : true,
    "MOV" : true,
    "MOVIE" : true,
    "MP" : true,
    "MQ" : true,
    "MR" : true,
    "MS" : true,
    "MSD" : true,
    "MT" : true,
    "MTN" : true,
    "MTR" : true,
    "MU" : true,
    "MUSEUM" : true,
    "MUTUAL" : true,
    "MV" : true,
    "MW" : true,
    "MX" : true,
    "MY" : true,
    "MZ" : true,
    "NA" : true,
    "NAB" : true,
    "NAGOYA" : true,
    "NAME" : true,
    "NATIONWIDE" : true,
    "NATURA" : true,
    "NAVY" : true,
    "NBA" : true,
    "NC" : true,
    "NE" : true,
    "NEC" : true,
    "NET" : true,
    "NETBANK" : true,
    "NETFLIX" : true,
    "NETWORK" : true,
    "NEUSTAR" : true,
    "NEW" : true,
    "NEWHOLLAND" : true,
    "NEWS" : true,
    "NEXT" : true,
    "NEXTDIRECT" : true,
    "NEXUS" : true,
    "NF" : true,
    "NFL" : true,
    "NG" : true,
    "NGO" : true,
    "NHK" : true,
    "NI" : true,
    "NICO" : true,
    "NIKE" : true,
    "NIKON" : true,
    "NINJA" : true,
    "NISSAN" : true,
    "NISSAY" : true,
    "NL" : true,
    "NO" : true,
    "NOKIA" : true,
    "NORTHWESTERNMUTUAL" : true,
    "NORTON" : true,
    "NOW" : true,
    "NOWRUZ" : true,
    "NOWTV" : true,
    "NP" : true,
    "NR" : true,
    "NRA" : true,
    "NRW" : true,
    "NTT" : true,
    "NU" : true,
    "NYC" : true,
    "NZ" : true,
    "OBI" : true,
    "OBSERVER" : true,
    "OFF" : true,
    "OFFICE" : true,
    "OKINAWA" : true,
    "OLAYAN" : true,
    "OLAYANGROUP" : true,
    "OLDNAVY" : true,
    "OLLO" : true,
    "OM" : true,
    "OMEGA" : true,
    "ONE" : true,
    "ONG" : true,
    "ONL" : true,
    "ONLINE" : true,
    "ONYOURSIDE" : true,
    "OOO" : true,
    "OPEN" : true,
    "ORACLE" : true,
    "ORANGE" : true,
    "ORG" : true,
    "ORGANIC" : true,
    "ORIGINS" : true,
    "OSAKA" : true,
    "OTSUKA" : true,
    "OTT" : true,
    "OVH" : true,
    "PA" : true,
    "PAGE" : true,
    "PANASONIC" : true,
    "PARIS" : true,
    "PARS" : true,
    "PARTNERS" : true,
    "PARTS" : true,
    "PARTY" : true,
    "PASSAGENS" : true,
    "PAY" : true,
    "PCCW" : true,
    "PE" : true,
    "PET" : true,
    "PF" : true,
    "PFIZER" : true,
    "PG" : true,
    "PH" : true,
    "PHARMACY" : true,
    "PHD" : true,
    "PHILIPS" : true,
    "PHONE" : true,
    "PHOTO" : true,
    "PHOTOGRAPHY" : true,
    "PHOTOS" : true,
    "PHYSIO" : true,
    "PICS" : true,
    "PICTET" : true,
    "PICTURES" : true,
    "PID" : true,
    "PIN" : true,
    "PING" : true,
    "PINK" : true,
    "PIONEER" : true,
    "PIZZA" : true,
    "PK" : true,
    "PL" : true,
    "PLACE" : true,
    "PLAY" : true,
    "PLAYSTATION" : true,
    "PLUMBING" : true,
    "PLUS" : true,
    "PM" : true,
    "PN" : true,
    "PNC" : true,
    "POHL" : true,
    "POKER" : true,
    "POLITIE" : true,
    "PORN" : true,
    "POST" : true,
    "PR" : true,
    "PRAMERICA" : true,
    "PRAXI" : true,
    "PRESS" : true,
    "PRIME" : true,
    "PRO" : true,
    "PROD" : true,
    "PRODUCTIONS" : true,
    "PROF" : true,
    "PROGRESSIVE" : true,
    "PROMO" : true,
    "PROPERTIES" : true,
    "PROPERTY" : true,
    "PROTECTION" : true,
    "PRU" : true,
    "PRUDENTIAL" : true,
    "PS" : true,
    "PT" : true,
    "PUB" : true,
    "PW" : true,
    "PWC" : true,
    "PY" : true,
    "QA" : true,
    "QPON" : true,
    "QUEBEC" : true,
    "QUEST" : true,
    "QVC" : true,
    "RACING" : true,
    "RADIO" : true,
    "RAID" : true,
    "RE" : true,
    "READ" : true,
    "REALESTATE" : true,
    "REALTOR" : true,
    "REALTY" : true,
    "RECIPES" : true,
    "RED" : true,
    "REDSTONE" : true,
    "REDUMBRELLA" : true,
    "REHAB" : true,
    "REISE" : true,
    "REISEN" : true,
    "REIT" : true,
    "RELIANCE" : true,
    "REN" : true,
    "RENT" : true,
    "RENTALS" : true,
    "REPAIR" : true,
    "REPORT" : true,
    "REPUBLICAN" : true,
    "REST" : true,
    "RESTAURANT" : true,
    "REVIEW" : true,
    "REVIEWS" : true,
    "REXROTH" : true,
    "RICH" : true,
    "RICHARDLI" : true,
    "RICOH" : true,
    "RIL" : true,
    "RIO" : true,
    "RIP" : true,
    "RMIT" : true,
    "RO" : true,
    "ROCHER" : true,
    "ROCKS" : true,
    "RODEO" : true,
    "ROGERS" : true,
    "ROOM" : true,
    "RS" : true,
    "RSVP" : true,
    "RU" : true,
    "RUGBY" : true,
    "RUHR" : true,
    "RUN" : true,
    "RW" : true,
    "RWE" : true,
    "RYUKYU" : true,
    "SA" : true,
    "SAARLAND" : true,
    "SAFE" : true,
    "SAFETY" : true,
    "SAKURA" : true,
    "SALE" : true,
    "SALON" : true,
    "SAMSCLUB" : true,
    "SAMSUNG" : true,
    "SANDVIK" : true,
    "SANDVIKCOROMANT" : true,
    "SANOFI" : true,
    "SAP" : true,
    "SARL" : true,
    "SAS" : true,
    "SAVE" : true,
    "SAXO" : true,
    "SB" : true,
    "SBI" : true,
    "SBS" : true,
    "SC" : true,
    "SCA" : true,
    "SCB" : true,
    "SCHAEFFLER" : true,
    "SCHMIDT" : true,
    "SCHOLARSHIPS" : true,
    "SCHOOL" : true,
    "SCHULE" : true,
    "SCHWARZ" : true,
    "SCIENCE" : true,
    "SCJOHNSON" : true,
    "SCOT" : true,
    "SD" : true,
    "SE" : true,
    "SEARCH" : true,
    "SEAT" : true,
    "SECURE" : true,
    "SECURITY" : true,
    "SEEK" : true,
    "SELECT" : true,
    "SENER" : true,
    "SERVICES" : true,
    "SES" : true,
    "SEVEN" : true,
    "SEW" : true,
    "SEX" : true,
    "SEXY" : true,
    "SFR" : true,
    "SG" : true,
    "SH" : true,
    "SHANGRILA" : true,
    "SHARP" : true,
    "SHAW" : true,
    "SHELL" : true,
    "SHIA" : true,
    "SHIKSHA" : true,
    "SHOES" : true,
    "SHOP" : true,
    "SHOPPING" : true,
    "SHOUJI" : true,
    "SHOW" : true,
    "SHOWTIME" : true,
    "SI" : true,
    "SILK" : true,
    "SINA" : true,
    "SINGLES" : true,
    "SITE" : true,
    "SJ" : true,
    "SK" : true,
    "SKI" : true,
    "SKIN" : true,
    "SKY" : true,
    "SKYPE" : true,
    "SL" : true,
    "SLING" : true,
    "SM" : true,
    "SMART" : true,
    "SMILE" : true,
    "SN" : true,
    "SNCF" : true,
    "SO" : true,
    "SOCCER" : true,
    "SOCIAL" : true,
    "SOFTBANK" : true,
    "SOFTWARE" : true,
    "SOHU" : true,
    "SOLAR" : true,
    "SOLUTIONS" : true,
    "SONG" : true,
    "SONY" : true,
    "SOY" : true,
    "SPA" : true,
    "SPACE" : true,
    "SPORT" : true,
    "SPOT" : true,
    "SPREADBETTING" : true,
    "SR" : true,
    "SRL" : true,
    "SS" : true,
    "ST" : true,
    "STADA" : true,
    "STAPLES" : true,
    "STAR" : true,
    "STATEBANK" : true,
    "STATEFARM" : true,
    "STC" : true,
    "STCGROUP" : true,
    "STOCKHOLM" : true,
    "STORAGE" : true,
    "STORE" : true,
    "STREAM" : true,
    "STUDIO" : true,
    "STUDY" : true,
    "STYLE" : true,
    "SU" : true,
    "SUCKS" : true,
    "SUPPLIES" : true,
    "SUPPLY" : true,
    "SUPPORT" : true,
    "SURF" : true,
    "SURGERY" : true,
    "SUZUKI" : true,
    "SV" : true,
    "SWATCH" : true,
    "SWIFTCOVER" : true,
    "SWISS" : true,
    "SX" : true,
    "SY" : true,
    "SYDNEY" : true,
    "SYSTEMS" : true,
    "SZ" : true,
    "TAB" : true,
    "TAIPEI" : true,
    "TALK" : true,
    "TAOBAO" : true,
    "TARGET" : true,
    "TATAMOTORS" : true,
    "TATAR" : true,
    "TATTOO" : true,
    "TAX" : true,
    "TAXI" : true,
    "TC" : true,
    "TCI" : true,
    "TD" : true,
    "TDK" : true,
    "TEAM" : true,
    "TECH" : true,
    "TECHNOLOGY" : true,
    "TEL" : true,
    "TEMASEK" : true,
    "TENNIS" : true,
    "TEVA" : true,
    "TF" : true,
    "TG" : true,
    "TH" : true,
    "THD" : true,
    "THEATER" : true,
    "THEATRE" : true,
    "TIAA" : true,
    "TICKETS" : true,
    "TIENDA" : true,
    "TIFFANY" : true,
    "TIPS" : true,
    "TIRES" : true,
    "TIROL" : true,
    "TJ" : true,
    "TJMAXX" : true,
    "TJX" : true,
    "TK" : true,
    "TKMAXX" : true,
    "TL" : true,
    "TM" : true,
    "TMALL" : true,
    "TN" : true,
    "TO" : true,
    "TODAY" : true,
    "TOKYO" : true,
    "TOOLS" : true,
    "TOP" : true,
    "TORAY" : true,
    "TOSHIBA" : true,
    "TOTAL" : true,
    "TOURS" : true,
    "TOWN" : true,
    "TOYOTA" : true,
    "TOYS" : true,
    "TR" : true,
    "TRADE" : true,
    "TRADING" : true,
    "TRAINING" : true,
    "TRAVEL" : true,
    "TRAVELCHANNEL" : true,
    "TRAVELERS" : true,
    "TRAVELERSINSURANCE" : true,
    "TRUST" : true,
    "TRV" : true,
    "TT" : true,
    "TUBE" : true,
    "TUI" : true,
    "TUNES" : true,
    "TUSHU" : true,
    "TV" : true,
    "TVS" : true,
    "TW" : true,
    "TZ" : true,
    "UA" : true,
    "UBANK" : true,
    "UBS" : true,
    "UG" : true,
    "UK" : true,
    "UNICOM" : true,
    "UNIVERSITY" : true,
    "UNO" : true,
    "UOL" : true,
    "UPS" : true,
    "US" : true,
    "UY" : true,
    "UZ" : true,
    "VA" : true,
    "VACATIONS" : true,
    "VANA" : true,
    "VANGUARD" : true,
    "VC" : true,
    "VE" : true,
    "VEGAS" : true,
    "VENTURES" : true,
    "VERISIGN" : true,
    "VERSICHERUNG" : true,
    "VET" : true,
    "VG" : true,
    "VI" : true,
    "VIAJES" : true,
    "VIDEO" : true,
    "VIG" : true,
    "VIKING" : true,
    "VILLAS" : true,
    "VIN" : true,
    "VIP" : true,
    "VIRGIN" : true,
    "VISA" : true,
    "VISION" : true,
    "VIVA" : true,
    "VIVO" : true,
    "VLAANDEREN" : true,
    "VN" : true,
    "VODKA" : true,
    "VOLKSWAGEN" : true,
    "VOLVO" : true,
    "VOTE" : true,
    "VOTING" : true,
    "VOTO" : true,
    "VOYAGE" : true,
    "VU" : true,
    "VUELOS" : true,
    "WALES" : true,
    "WALMART" : true,
    "WALTER" : true,
    "WANG" : true,
    "WANGGOU" : true,
    "WATCH" : true,
    "WATCHES" : true,
    "WEATHER" : true,
    "WEATHERCHANNEL" : true,
    "WEBCAM" : true,
    "WEBER" : true,
    "WEBSITE" : true,
    "WED" : true,
    "WEDDING" : true,
    "WEIBO" : true,
    "WEIR" : true,
    "WF" : true,
    "WHOSWHO" : true,
    "WIEN" : true,
    "WIKI" : true,
    "WILLIAMHILL" : true,
    "WIN" : true,
    "WINDOWS" : true,
    "WINE" : true,
    "WINNERS" : true,
    "WME" : true,
    "WOLTERSKLUWER" : true,
    "WOODSIDE" : true,
    "WORK" : true,
    "WORKS" : true,
    "WORLD" : true,
    "WOW" : true,
    "WS" : true,
    "WTC" : true,
    "WTF" : true,
    "XBOX" : true,
    "XEROX" : true,
    "XFINITY" : true,
    "XIHUAN" : true,
    "XIN" : true,
    "XN--11B4C3D" : true,
    "XN--1CK2E1B" : true,
    "XN--1QQW23A" : true,
    "XN--2SCRJ9C" : true,
    "XN--30RR7Y" : true,
    "XN--3BST00M" : true,
    "XN--3DS443G" : true,
    "XN--3E0B707E" : true,
    "XN--3HCRJ9C" : true,
    "XN--3OQ18VL8PN36A" : true,
    "XN--3PXU8K" : true,
    "XN--42C2D9A" : true,
    "XN--45BR5CYL" : true,
    "XN--45BRJ9C" : true,
    "XN--45Q11C" : true,
    "XN--4GBRIM" : true,
    "XN--54B7FTA0CC" : true,
    "XN--55QW42G" : true,
    "XN--55QX5D" : true,
    "XN--5SU34J936BGSG" : true,
    "XN--5TZM5G" : true,
    "XN--6FRZ82G" : true,
    "XN--6QQ986B3XL" : true,
    "XN--80ADXHKS" : true,
    "XN--80AO21A" : true,
    "XN--80AQECDR1A" : true,
    "XN--80ASEHDB" : true,
    "XN--80ASWG" : true,
    "XN--8Y0A063A" : true,
    "XN--90A3AC" : true,
    "XN--90AE" : true,
    "XN--90AIS" : true,
    "XN--9DBQ2A" : true,
    "XN--9ET52U" : true,
    "XN--9KRT00A" : true,
    "XN--B4W605FERD" : true,
    "XN--BCK1B9A5DRE4C" : true,
    "XN--C1AVG" : true,
    "XN--C2BR7G" : true,
    "XN--CCK2B3B" : true,
    "XN--CCKWCXETD" : true,
    "XN--CG4BKI" : true,
    "XN--CLCHC0EA0B2G2A9GCD" : true,
    "XN--CZR694B" : true,
    "XN--CZRS0T" : true,
    "XN--CZRU2D" : true,
    "XN--D1ACJ3B" : true,
    "XN--D1ALF" : true,
    "XN--E1A4C" : true,
    "XN--ECKVDTC9D" : true,
    "XN--EFVY88H" : true,
    "XN--FCT429K" : true,
    "XN--FHBEI" : true,
    "XN--FIQ228C5HS" : true,
    "XN--FIQ64B" : true,
    "XN--FIQS8S" : true,
    "XN--FIQZ9S" : true,
    "XN--FJQ720A" : true,
    "XN--FLW351E" : true,
    "XN--FPCRJ9C3D" : true,
    "XN--FZC2C9E2C" : true,
    "XN--FZYS8D69UVGM" : true,
    "XN--G2XX48C" : true,
    "XN--GCKR3F0F" : true,
    "XN--GECRJ9C" : true,
    "XN--GK3AT1E" : true,
    "XN--H2BREG3EVE" : true,
    "XN--H2BRJ9C" : true,
    "XN--H2BRJ9C8C" : true,
    "XN--HXT814E" : true,
    "XN--I1B6B1A6A2E" : true,
    "XN--IMR513N" : true,
    "XN--IO0A7I" : true,
    "XN--J1AEF" : true,
    "XN--J1AMH" : true,
    "XN--J6W193G" : true,
    "XN--JLQ480N2RG" : true,
    "XN--JLQ61U9W7B" : true,
    "XN--JVR189M" : true,
    "XN--KCRX77D1X4A" : true,
    "XN--KPRW13D" : true,
    "XN--KPRY57D" : true,
    "XN--KPUT3I" : true,
    "XN--L1ACC" : true,
    "XN--LGBBAT1AD8J" : true,
    "XN--MGB9AWBF" : true,
    "XN--MGBA3A3EJT" : true,
    "XN--MGBA3A4F16A" : true,
    "XN--MGBA7C0BBN0A" : true,
    "XN--MGBAAKC7DVF" : true,
    "XN--MGBAAM7A8H" : true,
    "XN--MGBAB2BD" : true,
    "XN--MGBAH1A3HJKRD" : true,
    "XN--MGBAI9AZGQP6J" : true,
    "XN--MGBAYH7GPA" : true,
    "XN--MGBBH1A" : true,
    "XN--MGBBH1A71E" : true,
    "XN--MGBC0A9AZCG" : true,
    "XN--MGBCA7DZDO" : true,
    "XN--MGBCPQ6GPA1A" : true,
    "XN--MGBERP4A5D4AR" : true,
    "XN--MGBGU82A" : true,
    "XN--MGBI4ECEXP" : true,
    "XN--MGBPL2FH" : true,
    "XN--MGBT3DHD" : true,
    "XN--MGBTX2B" : true,
    "XN--MGBX4CD0AB" : true,
    "XN--MIX891F" : true,
    "XN--MK1BU44C" : true,
    "XN--MXTQ1M" : true,
    "XN--NGBC5AZD" : true,
    "XN--NGBE9E0A" : true,
    "XN--NGBRX" : true,
    "XN--NODE" : true,
    "XN--NQV7F" : true,
    "XN--NQV7FS00EMA" : true,
    "XN--NYQY26A" : true,
    "XN--O3CW4H" : true,
    "XN--OGBPF8FL" : true,
    "XN--OTU796D" : true,
    "XN--P1ACF" : true,
    "XN--P1AI" : true,
    "XN--PGBS0DH" : true,
    "XN--PSSY2U" : true,
    "XN--Q7CE6A" : true,
    "XN--Q9JYB4C" : true,
    "XN--QCKA1PMC" : true,
    "XN--QXA6A" : true,
    "XN--QXAM" : true,
    "XN--RHQV96G" : true,
    "XN--ROVU88B" : true,
    "XN--RVC1E0AM3E" : true,
    "XN--S9BRJ9C" : true,
    "XN--SES554G" : true,
    "XN--T60B56A" : true,
    "XN--TCKWE" : true,
    "XN--TIQ49XQYJ" : true,
    "XN--UNUP4Y" : true,
    "XN--VERMGENSBERATER-CTB" : true,
    "XN--VERMGENSBERATUNG-PWB" : true,
    "XN--VHQUV" : true,
    "XN--VUQ861B" : true,
    "XN--W4R85EL8FHU5DNRA" : true,
    "XN--W4RS40L" : true,
    "XN--WGBH1C" : true,
    "XN--WGBL6A" : true,
    "XN--XHQ521B" : true,
    "XN--XKC2AL3HYE2A" : true,
    "XN--XKC2DL3A5EE0H" : true,
    "XN--Y9A3AQ" : true,
    "XN--YFRO4I67O" : true,
    "XN--YGBI2AMMX" : true,
    "XN--ZFR164B" : true,
    "XXX" : true,
    "XYZ" : true,
    "YACHTS" : true,
    "YAHOO" : true,
    "YAMAXUN" : true,
    "YANDEX" : true,
    "YE" : true,
    "YODOBASHI" : true,
    "YOGA" : true,
    "YOKOHAMA" : true,
    "YOU" : true,
    "YOUTUBE" : true,
    "YT" : true,
    "YUN" : true,
    "ZA" : true,
    "ZAPPOS" : true,
    "ZARA" : true,
    "ZERO" : true,
    "ZIP" : true,
    "ZM" : true,
    "ZONE" : true,
    "ZUERICH" : true,
    "ZW" : true,
}

export default emailExtensions