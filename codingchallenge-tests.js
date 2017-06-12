'use strict';

describe('ascii unique fragments calculator', function () {
    it('single char', function () {
        var result = sumAsciiValuesForUniqueCharacterFragments('a');
        expect(result).toEqual(97);
    });

    it('white space', function () {
        var result = sumAsciiValuesForUniqueCharacterFragments(' ');
        expect(result).toEqual(32);
    });


    it('simple string calculates correct values', function () {
        var happyPathString = 'AaaaaaaBbbccaaaaaaaaaaaAAAAAAAa';
        var result = sumAsciiValuesForUniqueCharacterFragments(happyPathString);
        expect(result).toEqual(1040);
    });

    it('empty string calculates 0', function () {
        var emptyString = '';
        var result = sumAsciiValuesForUniqueCharacterFragments(emptyString);
        expect(result).toEqual(0);
    });

    it('undefined throws', function () {
        expect(() => { sumAsciiValuesForUniqueCharacterFragments(undefined); }).toThrow(new Error("input string is undefined"));
    });

    it('long random string - basic performance measurement', function () {
        var thousandBytes = 'Loremipsumdolorsitamet,consecteturadipiscingelit.Crasutmetusanullatemporlobortis.Phasellusfermentumimperdietvelitadapibus.Sedvitaeaccumsanligula.Aeneanaccumsanarcunonblanditmollis.Vestibulumsempermagnaatlobortiselementum.Fusceleolorem,convallisatmalesuadaut,eleifendidlorem.Duisetviverramauris,congueposuerediam.Praesentimperdietscelerisqueduiinvehicula.Donecetenimvestibulum,vestibulumrisuseget,feugiatleo.Utincommodoipsum,quisullamcorpermi.Maecenasconvallisnisivelturpisfaucibus,utviverraquamfacilisis.Utmaximuseratinnislsagittisdignissim.Nullamtristiqueanteacorcitinciduntconsequat.Nullasuscipitelementumest,neclaoreetnisieuismodsuscipit.Fusceinorciquisligulatinciduntfermentum.Intinciduntacturpisveltempus.Maecenasaccumsanmaurisvelhendreritvenenatis.Morbivulputatefinibusest,idmaximusanteconsectetursed.Namaliberoante.Sedscelerisqueegetturpisquislobortis.Sedconsequatodioposuereultricesvestibulum.Etiamfeugiatturpissednuncposuerelobortis.Donecdictummetussem,dapibusmaximusturpislaoreeta.Etiamsitametcongueodio,vitaeluctustortor.Aliquamluctusminisi,etlaoreetestvolutpattristique.Maecenasarculibero,pulvinaracdictumvitae,tinciduntquisneque.Etiamvestibulum,urnanontristiquecongue,eratligulaconvallislibero,aclobortisliberoaugueetmassa.Nuncnisitellus,mattisindiamlobortis,dignissimporttitornibh.Donecnonlaoreetlorem,necsempertortor.Etiamaceleifendmagna.Donecacfinibuslacus,inmolestienulla.Vestibulumegettortorpellentesque,vehiculadolorquis,tinciduntdolor.Aliquameratvolutpat.Crastemporultricesnisinonauctor.Curabiturvelfelisidexporttitortempus.Sedfringilladapibusquamidpulvinar.Praesentnecexegettellusposuerecommodononveltortor.Maurisnisiipsum,maximusatfelisid,sodaleseleifendorci.Sedcondimentumetauguegravidavestibulum.Fuscealiquetliberoaugue,nonvehiculaturpisdignissimin.Pellentesquemattisestegetauguelacinia,egetpellentesquedolorultricies.Fuscemollisleoatfelismollis,acfacilisisestfringilla.Integeratauguedictum,ultriciesexut,rutrumdiam.Vivamuslaoreetturpisnontemporgravida.Aeneanefficitur,erosegetaccumsanaliquam,tellusdiamporttitorante,actinciduntnisimetusajusto.Nullamquiscursusmauris,atconsequatante.Suspendisseiaculis,turpisavariustempor,dolorenimpretiumurna,sedultricestelluseratsitametlorem.Fuscedolorligula,tinciduntsedconsequattincidunt,temporsedneque.Sednecestsedarcudictumaliquet.Classaptenttacitisociosquadlitoratorquentperconubianostra,perinceptoshimenaeos.Curabiturmassanibh,finibusnecmaurisat,variusvenenatismi.Nullafacilisi.Suspendissefringillafeugiatrisus.Craseumetuslorem.Vestibulumpharetravelnequeamollis.Quisqueluctusconsecteturleoinviverra.Morbimaurissem,finibusatlacuset,sodalesaliquamvelit.Proinconvallisligulaadiamefficitur,etvariusorciornare.Donecsodalesfringillaleo,necviverranibh.Praesentquisconsequatmauris.Donecetelementumlorem,quispharetraenim.Suspendissealiquetplacerattellus,sedhendreritipsumhendrerita.Nuncnecquamornare,suscipitlectuseu,sodalessapien.Nullamlaoreetcondimentummi,necluctusfelisvariusvel.Phasellussitametgravidaante,utpharetraex.Proinsitametvehiculadui,sitametgravidamauris.Suspendissetinciduntfelisegetlaciniavestibulum.Pellentesquegravidafaucibusexatluctus.Donecvulputatemitortor.Proincursuslobortisdui,seddignissimmetus.Suspendissepotenti.VestibulumanteipsumprimisinfaucibusorciluctusetultricesposuerecubiliaCurae;Vivamuspurusjusto,lobortisegetnuncid,pretiumelementumelit.Suspendissesedliberotempor,luctusturpisnec,dignissimnisl.Maecenasporttitortellusquisnequeposuerecursus.Phasellustristiquefeugiatpellentesque.Vestibulumportacommodovulputate.Praesentauctormassaeuplaceratvehicula.Suspendissemaximusconsequatporttitor.Vestibulumsedodioatdiamfaucibusviverravelseddui.Nullatristiquetemportellusnonsagittis.Donecportaelementumlectus,nonconsecteturlectus.Aeneanvitaeligulaquam.Proinposueremalesuadamagna,avolutpatodiosagittiseget.Crasmiarcu,dapibuscommodoquamnec,placeratullamcorperturpis.Nullaacvolutpatsem.Vivamusidliberopretiumenimtemporfaucibusetsederat.Fusceattortorfringilla,accumsanelitvel,accumsandui.Maurismaximusrisusnunc,idtristiquenisivehiculaa.Maurisvariuseratamaurisvarius,aconsequatleoullamcorper.Namtempusligulaex,etfermentumnisisodalesnec.Maecenascursuselementumlaoreet.Quisqueluctuseratnecjustoauctorpharetra.Utporttitorinterdumconvallis.Praesentturpisdui,bibendumamattisat,pellentesquevelnulla.Etiamviverraconguemaurispretiummattis.Praesentposuerenonenimutvestibulum.Vivamusdictumnequesednislvenenatisgravida.Vivamusnibherat,blanditamassaet,venenatiseuismodlorem.Nullamattisplaceratnislsitametpulvinar.Namtinciduntvulputatedictum.Phaselluseufermentumligula,etconsecteturtellus.Proinfinibusligulaidvariusfringilla.Fuscetellusdolor,sagittisatanteat,pretiumgravidadolor.Maecenasuttinciduntorci.Donecetultricestellus.Integerornarenisiquisodiodictum,velscelerisquetellustempus.Sedaterostincidunt,faucibuspurussed,molestieurna.Curabiturmattisipsumetdolorpulvinarblandit.Utetloremsollicitudin,consecteturmassanon,vestibulumdolor.Quisqueinorcisedlacuseleifendaliquam.Utfacilisisacjustoacdictum.Donecullamcorpervulputatenisisedposuere.Maecenasvolutpatvehiculavelitategestas.Suspendissequisvelitnonorciiaculisefficiturnonanunc.Duisultricies,nequeultricieselementumfringilla,semmagnapulvinarante,atcondimentumrisusduiidleo.Pellentesqueacduinunc.Suspendissepotenti.Maecenasidmolestieodio.Etiamsempervenenatisturpisacpellentesque.Aliquamacligulaconsequatlectusmolestiescelerisque.Integereununcbibendum,placeratelitnec,facilisisipsum.Quisquetincidunt,orciatmolestieegestas,maurisnislbibendumdiam,vitaemattisorcierosvelfelis.Donecmollisfelisnibh,etpretiumleotinciduntsed.Namcommodoaccumsaneros,seddictumnuncauctoregestas.Phasellusposuereerosmauris,egetcondimentumsapienultriciesut.Inscelerisquelectusvitaefinibusaccumsan.Fuscebibendumquamanislfaucibuscommodo.Maurisfaucibus,arcuegetpretiumultrices,loremodioconsequatleo,sedmattissemnibhacligula.Aliquamnontellusaugue.Crasefficiturfacilisiselit,quisimperdiettellusposuereet.Vivamusconvallisurnasedplaceratvarius.Donecvariusexquisvulputatevarius.Vestibulumjustoneque,suscipitatnullasitamet,auctormattisipsum.Crasullamcorpermassaajustotristiquecongue.Crasegestasturpisex,posuereplacerattelluseleifendpretium.Nullacongue,anteultricespharetrasagittis,tortorpuruspellentesqueorci,etconguesapienipsumconsectetursem.Nullaacaugueacnibhmaximuspharetrainvitaeleo.Aliquamligulami,congueegetligulaet,fringillapretiummi.Proinluctusmolestiesuscipit.Utluctusegetnislvestibulumeleifend.Integeregetiaculisnisi,necluctuslacus.Praesentlobortistinciduntlaoreet.Quisqueplacerat,lacussitameteuismoddignissim,urnaturpisdignissimerat,atrhoncusenimnequeegetleo.Duiseraturna,tristiquesedloremid,ornarevehiculajusto.Nullamutarcuimperdiet,rhoncussemsed,venenatistellus.Vestibulumultriciesmisitametaccumsanvarius.Utvelitipsum,placeratacnibhnec,finibuscommodolectus.Innecmassautdiamportacommodoatatlectus.Maecenasportavolutpatipsum,nonsuscipiterosvestibulumin.Namsedullamcorperaugue.Utlaoreettortornulla,ettinciduntenimelementumac.Fuscerhoncusvenenatisarcu.Morbiegestasvehiculaipsumeualiquet.Curabitursagittissempertellus,atvenenatisduiscelerisquein.Vestibulumsedipsumeros.Etiamquistortorlacus.Praesenteuturpissuscipit,vehiculanibhut,pellentesquemetus.Etiamefficiturnibhelit,indictumtortorfinibusid.Etiamutvolutpaterat.Vivamusanullalorem.Aliquamtristiqueestelit,necsodalespurusmattiseu.Donecacligulavelestconvallisrutrumatidsapien.Integerauctorsodalesdolor,egetfinibusmivolutpatat.Quisqueplacerattortorinenimcondimentum,utpellentesquenibhfacilisis.Donecpellentesquejustositametnislporttitorfaucibus.Seddolordui,feugiatsitametnislvel,euismodlaoreetsapien.Sednonorciaarcuvestibulumsodales.Sedsitametipsumvelfeliscursusfermentum.Proinfinibusturpisligula,nonfacilisisnullaconsecteturvel.Pellentesquevitaeeroscursuserosfeugiatlobortis.Invelitnulla,sagittisatfringillaut,dapibusidipsum.Namnonauctortortor.Pellentesquelacusfelis,scelerisquesitametdapibusat,blanditnectortor.Inpurusarcu,condimentumnonfermentumnon,volutpatetmauris.Pellentesquehabitantmorbitristiquesenectusetnetusetmalesuadafamesacturpisegestas.Duisnonegestasante.Duisvestibulumultricesplacerat.Pellentesqueantequam,fermentumutdapibusat,auctoratellus.Mauriseleifendornarevelitnonvolutpat.Namauctorquisipsumatdapibus.Loremipsumdolorsitamet,consecteturadipiscingelit.Nuncauguenulla,ultriciessitametmaximusquis,variusnecmi.Vivamuspretiumfeugiatcondimentum.Vivamussuscipit,arcuegetpharetratristique,arcumassamaximuseros,eumattisleoesteuligula.Pellentesquequampurus,viverradapibuscommodovitae,pellentesqueegetnibh.Maecenasquisleoarcu.Proincursuslaciniaodiositametcommodo.Quisquelaciniatellusmassa,aconsecteturelitmetus.';
        var result = sumAsciiValuesForUniqueCharacterFragments(thousandBytes);
        expect(result).toEqual(239933338);
    });
   
});