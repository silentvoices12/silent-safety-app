"use client";
import { useState } from "react";

const tabs = ["🧘 Meditation", "🎥 Addiction Recovery", "👨‍👩‍👧 Family & Friends", "🧠 Mental Health"];

const meditation = [
  { title: "Headspace - Meditation for Beginners", url: "https://www.headspace.com/meditation/meditation-for-beginners" },
  { title: "Calm - Guided Meditation", url: "https://www.calm.com/meditation" },
  { title: "Insight Timer - Free Meditation App", url: "https://insighttimer.com" },
  { title: "UCLA Mindful Awareness Research Center", url: "https://www.uclahealth.org/programs/marc" },
  { title: "The Free Mindfulness Project", url: "https://www.freemindfulness.org" },
  { title: "Smiling Mind - Free Mindfulness App", url: "https://www.smilingmind.com.au" },
  { title: "Tara Brach - Guided Meditations", url: "https://www.tarabrach.com/guided-meditations" },
  { title: "Mindful.org - How to Meditate", url: "https://www.mindful.org/how-to-meditate" },
  { title: "Waking Up - Sam Harris Meditation", url: "https://www.wakingup.com" },
  { title: "10% Happier - Meditation for Fidgety Skeptics", url: "https://www.tenpercent.com" },
  { title: "NHS - Mindfulness Guide", url: "https://www.nhs.uk/mental-health/self-help/tips-and-support/mindfulness" },
  { title: "Recovery Dharma - Buddhist Meditation", url: "https://recoverydharma.org" },
  { title: "Refuge Recovery - Mindfulness in Recovery", url: "https://www.refugerecovery.org" },
  { title: "Positive Psychology - Meditation Scripts", url: "https://positivepsychology.com/meditation-scripts" },
  { title: "Do Yoga With Me - Free Meditation Videos", url: "https://www.doyogawithme.com/meditation" },
  { title: "Mindworks - Meditation Courses", url: "https://mindworks.org" },
  { title: "Lion's Roar - Buddhist Meditation", url: "https://www.lionsroar.com/category/meditation" },
  { title: "Breathworks - Mindfulness for Health", url: "https://www.breathworks-mindfulness.org.uk" },
  { title: "Oxford Mindfulness Centre", url: "https://www.oxfordmindfulness.org" },
  { title: "Spirit Rock - Meditation Centre", url: "https://www.spiritrock.org" },
  { title: "Dharma Seed - Free Meditation Talks", url: "https://dharmaseed.org" },
  { title: "Audio Dharma - Gil Fronsdal", url: "https://www.audiodharma.org" },
  { title: "Anxiety UK - Mindfulness Resources", url: "https://www.anxietyuk.org.uk/get-help/mindfulness" },
  { title: "Mind - Mindfulness Guide", url: "https://www.mind.org.uk/information-support/drugs-and-treatments/mindfulness" },
  { title: "Palouse Mindfulness - Free MBSR Course", url: "https://palousemindfulness.com" },
  { title: "Mindfulness Based Cognitive Therapy", url: "https://www.mbct.com" },
  { title: "Jack Kornfield - Guided Meditations", url: "https://jackkornfield.com/meditations" },
  { title: "Sharon Salzberg - Loving Kindness", url: "https://www.sharonsalzberg.com/guided-meditations" },
  { title: "Thich Nhat Hanh - Plum Village", url: "https://plumvillage.org/mindfulness-practice" },
  { title: "Pema Chodron - Meditation Teachings", url: "https://pemachodronfoundation.org" },
  { title: "Vipassana Meditation - S.N. Goenka", url: "https://www.dhamma.org" },
  { title: "Shambhala - Meditation Instruction", url: "https://shambhala.org/meditation" },
  { title: "Stop, Breathe & Think - Free Meditations", url: "https://www.stopbreathethink.com" },
  { title: "Greater Good in Action - Mindfulness", url: "https://ggia.berkeley.edu" },
  { title: "Zen Habits - Meditation Guide", url: "https://zenhabits.net/meditation-guide" },
  { title: "The Chopra Center - Meditation Basics", url: "https://chopra.com/articles/what-is-meditation" },
  { title: "Sleep Foundation - Meditation for Sleep", url: "https://www.sleepfoundation.org/sleep-hygiene/meditation-for-sleep" },
  { title: "Mindfulness Northwest", url: "https://www.mindfulnessnorthwest.com" },
  { title: "Be Mindful Online Course", url: "https://www.bemindfulonline.com" },
  { title: "Against the Stream - Recovery Meditation", url: "https://www.againstthestream.org" },
  { title: "Sounds True - Meditation Resources", url: "https://www.soundstrue.com/collections/meditation" },
  { title: "Jon Kabat-Zinn - Mindfulness Resources", url: "https://www.mindfulnesscds.com" },
  { title: "Tricycle - Meditation for Beginners", url: "https://tricycle.org/beginners" },
  { title: "NADA Protocol - Meditation for Recovery", url: "https://www.acudetox.com" },
  { title: "Rubin Museum - Brainwave Meditation", url: "https://rubinmuseum.org/programs/brainwave" },
  { title: "The Mindfulness Initiative", url: "https://www.themindfulnessinitiative.org" },
  { title: "Mindfulness in Schools Project", url: "https://mindfulnessinschools.org" },
  { title: "The Center for Contemplative Mind", url: "https://www.contemplativemind.org" },
  { title: "Meditation Oasis Podcast", url: "https://meditationoasis.com" },
  { title: "Insight Meditation Society", url: "https://www.dharma.org" },
];

const addiction = [
  { title: "Johann Hari - Everything You Know About Addiction is Wrong", videoId: "ao8L-0nSYzg" },
  { title: "Gabor Maté - In the Realm of Hungry Ghosts", videoId: "66cYcSak6nE" },
  { title: "Russell Brand - Recovery from Addiction", videoId: "stmUdJEQiME" },
  { title: "Brené Brown - The Power of Vulnerability", videoId: "iCvmsMzlF7o" },
  { title: "Nora Volkow - What is Addiction", videoId: "BnOnMjBFCEU" },
  { title: "Dopamine Nation - Anna Lembke", videoId: "jziP0CEgvOw" },
  { title: "The Science of Addiction", videoId: "BZSGmVDGZmU" },
  { title: "SMART Recovery - Introduction", videoId: "z5_iMlBfmSQ" },
  { title: "The 12 Steps Explained", videoId: "Awy_QjOFpq4" },
  { title: "Addiction and the Brain - Yale Medicine", videoId: "BZSGmVDGZmU" },
  { title: "TEDx - My Recovery from Addiction", videoId: "j4xmFDhJqbk" },
  { title: "Breaking the Cycle of Addiction", videoId: "V_h4tDpCbSc" },
  { title: "The Kindness Method - Shahroo Izadi", videoId: "9D3KuZEDles" },
  { title: "Alcohol Explained - William Porter", videoId: "2KSMBpXJJkI" },
  { title: "This Naked Mind - Annie Grace", videoId: "C1Lg5zaJESw" },
  { title: "The Biology of Desire - Marc Lewis", videoId: "BZSGmVDGZmU" },
  { title: "Trauma and Addiction - Gabor Maté", videoId: "66cYcSak6nE" },
  { title: "ACEs - Adverse Childhood Experiences", videoId: "BnOnMjBFCEU" },
  { title: "Finding Purpose in Recovery", videoId: "stmUdJEQiME" },
  { title: "One Year Sober - What I Learned", videoId: "C1Lg5zaJESw" },
  { title: "Relapse Prevention Strategies", videoId: "j4xmFDhJqbk" },
  { title: "Building a Life Worth Staying Sober For", videoId: "jL9MSH5h4rE" },
  { title: "Yoga for Addiction Recovery", videoId: "C1Lg5zaJESw" },
  { title: "Meditation for Addiction Recovery", videoId: "iCvmsMzlF7o" },
  { title: "Exercise and Recovery", videoId: "j4xmFDhJqbk" },
  { title: "Nutrition in Recovery", videoId: "9D3KuZEDles" },
  { title: "Sleep and Sobriety", videoId: "BZSGmVDGZmU" },
  { title: "How Addiction Hijacks the Brain", videoId: "BZSGmVDGZmU" },
  { title: "AA Speaker - Recovery Story", videoId: "jL9MSH5h4rE" },
  { title: "NA Speaker - Recovery from Narcotics", videoId: "KoIq_XrkKtI" },
  { title: "Celebrate Recovery - Introduction", videoId: "z5_iMlBfmSQ" },
  { title: "The Sinclair Method for Alcohol", videoId: "BnOnMjBFCEU" },
  { title: "Dr Drew - Understanding Addiction", videoId: "MnMBLQdOxDw" },
  { title: "Generation Found - Recovery Documentary", videoId: "C2bycGAJAX8" },
  { title: "The Anonymous People - Recovery Documentary", videoId: "C2bycGAJAX8" },
  { title: "One Little Pill - Naltrexone Documentary", videoId: "BnOnMjBFCEU" },
  { title: "Chasing the Dragon - Drug Warning Film", videoId: "WGaIkxWZNGU" },
  { title: "SMART Recovery Tools", videoId: "z5_iMlBfmSQ" },
  { title: "AA Big Book - Audio Version", videoId: "Awy_QjOFpq4" },
  { title: "NA Basic Text - Audio Version", videoId: "KoIq_XrkKtI" },
  { title: "Recovery 2.0 - Tommy Rosen", videoId: "2KSMBpXJJkI" },
  { title: "Craig Ferguson - A Wee Bit O Revolution", videoId: "f5-z3DGiSnI" },
  { title: "How to Help Someone with Addiction", videoId: "V_h4tDpCbSc" },
  { title: "Intervention - Understanding the Process", videoId: "jL9MSH5h4rE" },
  { title: "Bringing It Home - Recovery Documentary", videoId: "C2bycGAJAX8" },
  { title: "The House I Live In - Documentary", videoId: "WGaIkxWZNGU" },
  { title: "Quit Like a Woman - Holly Whitaker", videoId: "C1Lg5zaJESw" },
  { title: "Matthew Perry - His Recovery Story", videoId: "Xn9HqF6V3fk" },
  { title: "Gabor Mate - Trauma as the Root of Addiction", videoId: "66cYcSak6nE" },
  { title: "TEDx - The Power of Sobriety", videoId: "stmUdJEQiME" },
];

const family = [
  { title: "Al-Anon - Help for Families of Alcoholics", url: "https://al-anon.org" },
  { title: "Nar-Anon - Families of Addicts", url: "https://www.nar-anon.org" },
  { title: "SMART Recovery Family & Friends", url: "https://www.smartrecovery.org/family" },
  { title: "Adfam - Families Affected by Drugs", url: "https://adfam.org.uk" },
  { title: "Families Anonymous", url: "https://www.familiesanonymous.org" },
  { title: "Partnership to End Addiction - For Families", url: "https://drugfree.org" },
  { title: "The Addict's Mom", url: "https://addictsmom.com" },
  { title: "GRASP - Grief Recovery After Substance Passing", url: "https://grasphelp.org" },
  { title: "NHS - Supporting Someone with Addiction", url: "https://www.nhs.uk/live-well/addiction-support/supporting-someone-with-an-addiction" },
  { title: "Mind - How to Support Someone", url: "https://www.mind.org.uk/information-support/helping-someone-else" },
  { title: "Frank - Helping a Friend", url: "https://www.talktofrank.com/get-help/helping-a-friend" },
  { title: "Alcohol Change UK - For Families", url: "https://alcoholchange.org.uk/help-and-support/getting-help/help-for-families" },
  { title: "With You - Family Support Service", url: "https://www.wearewithyou.org.uk/services/family-support" },
  { title: "Change Grow Live - Family Support", url: "https://www.changegrowlive.org" },
  { title: "Turning Point - Family Help", url: "https://www.turning-point.co.uk/services/drugs-alcohol.html" },
  { title: "Beyond Addiction - Family Guide", url: "https://beyondaddictionbook.com" },
  { title: "Setting Boundaries with Addicted Family Members", url: "https://drugfree.org/article/setting-limits" },
  { title: "How to Stop Enabling an Addict", url: "https://www.addictioncenter.com/treatment/enabling" },
  { title: "Intervention - How to Do One", url: "https://www.addictioncenter.com/treatment/intervention" },
  { title: "NACOA - National Association for Children of Alcoholics", url: "https://nacoa.org.uk" },
  { title: "Childline - Parent Alcohol Drug Problems", url: "https://www.childline.org.uk/info-advice/home-families/family-relationships/parent-alcohol-drug-problems" },
  { title: "Young Minds - Parents Guide", url: "https://www.youngminds.org.uk/parent" },
  { title: "Family Lives - Helpline and Support", url: "https://www.familylives.org.uk" },
  { title: "Relate - Relationship Support", url: "https://www.relate.org.uk" },
  { title: "Carers UK - Support for Carers", url: "https://www.carersuk.org" },
  { title: "Rethink - Caring for Someone", url: "https://www.rethink.org/advice-and-information/carers-hub" },
  { title: "The Priory - Family Therapy", url: "https://www.priorygroup.com/addiction-treatment/family-therapy" },
  { title: "Rehab 4 Addiction - Family Advice", url: "https://www.rehab4addiction.co.uk/family-addiction-advice" },
  { title: "CRAFT - Community Reinforcement Family Training", url: "https://www.addictionhelper.com/treatment/craft" },
  { title: "Codependency No More - Melody Beattie", url: "https://www.hazeldenbettyford.org/products/codependent-no-more" },
  { title: "Detachment with Love - Al-Anon Concept", url: "https://al-anon.org/for-members/members-resources/literature/detachment" },
  { title: "How to Talk to a Loved One About Addiction", url: "https://drugfree.org/article/how-to-talk-to-your-loved-one-about-their-substance-use" },
  { title: "Understanding Codependency", url: "https://www.psychologytoday.com/gb/basics/codependency" },
  { title: "Grief and Loss in Addiction Families", url: "https://grasphelp.org/resources" },
  { title: "Self Care for Addiction Family Members", url: "https://adfam.org.uk/help-for-families/looking-after-yourself" },
  { title: "Living with an Alcoholic - Survival Guide", url: "https://alcoholchange.org.uk/help-and-support/getting-help/help-for-families" },
  { title: "Financial Help for Families in Crisis", url: "https://www.turn2us.org.uk" },
  { title: "Legal Rights of Family Members", url: "https://www.release.org.uk/law" },
  { title: "Bereavement Support After Overdose Loss", url: "https://grasphelp.org" },
  { title: "Addaction - Family Support", url: "https://www.wearewithyou.org.uk" },
  { title: "Refuge - Domestic Abuse and Addiction", url: "https://www.refuge.org.uk" },
  { title: "Release - Drugs Law and Human Rights", url: "https://www.release.org.uk" },
  { title: "Teen Challenge - Family Resources", url: "https://teenchallenge.org/family-resources" },
  { title: "Learn to Cope - Family Support", url: "https://www.learntocope.org" },
  { title: "Gaslighting in Addiction Relationships", url: "https://www.psychologytoday.com/gb/basics/gaslighting" },
  { title: "William Cope Moyers - Recovery Story", url: "https://www.hazeldenbettyford.org" },
  { title: "Children of Addicts - Support Resources", url: "https://nacoa.org.uk" },
  { title: "Positive Futures - Young People", url: "https://positivefutures.org.uk" },
  { title: "Al-Anon - Newcomers Guide", url: "https://al-anon.org/newcomers" },
  { title: "Nar-Anon - How It Works", url: "https://www.nar-anon.org/how-it-works" },
];

const mentalHealth = [
  { title: "Mind - Mental Health Charity UK", url: "https://www.mind.org.uk" },
  { title: "Mental Health Foundation", url: "https://www.mentalhealth.org.uk" },
  { title: "Rethink Mental Illness", url: "https://www.rethink.org" },
  { title: "Every Mind Matters - NHS", url: "https://www.nhs.uk/every-mind-matters" },
  { title: "Young Minds - Youth Mental Health", url: "https://www.youngminds.org.uk" },
  { title: "CALM - Campaign Against Living Miserably", url: "https://www.thecalmzone.net" },
  { title: "Samaritans - Emotional Support", url: "https://www.samaritans.org" },
  { title: "Shout - Crisis Text Line", url: "https://giveusashout.org" },
  { title: "Papyrus - Suicide Prevention", url: "https://www.papyrus-uk.org" },
  { title: "PTSD UK", url: "https://www.ptsduk.org" },
  { title: "OCD UK", url: "https://www.ocduk.org" },
  { title: "Anxiety UK", url: "https://www.anxietyuk.org.uk" },
  { title: "Bipolar UK", url: "https://www.bipolaruk.org" },
  { title: "Beat Eating Disorders", url: "https://www.beateatingdisorders.org.uk" },
  { title: "Self Harm UK", url: "https://www.selfharm.co.uk" },
  { title: "Dual Diagnosis - Addiction and Mental Health", url: "https://www.dualdiagnosis.org" },
  { title: "BACP - Find a Therapist", url: "https://www.bacp.co.uk/search/Therapists" },
  { title: "Psychology Today - Find a Therapist", url: "https://www.psychologytoday.com/gb/therapists" },
  { title: "7 Cups - Online Therapy and Listening", url: "https://www.7cups.com" },
  { title: "Togetherall - Peer Support Community", url: "https://togetherall.com" },
  { title: "Kooth - Online Mental Health for Young People", url: "https://www.kooth.com" },
  { title: "DBT - Dialectical Behaviour Therapy", url: "https://www.mind.org.uk/information-support/drugs-and-treatments/dialectical-behaviour-therapy-dbt" },
  { title: "CBT - Cognitive Behavioural Therapy", url: "https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/cognitive-behavioural-therapy-cbt/overview" },
  { title: "ACT - Acceptance and Commitment Therapy", url: "https://www.psychologytools.com/self-help/act-for-depression" },
  { title: "EMDR - Trauma Therapy", url: "https://www.emdrassociation.org.uk" },
  { title: "Trauma Informed Care", url: "https://www.traumainformedcare.co.uk" },
  { title: "Pete Walker - Complex PTSD Resources", url: "http://www.pete-walker.com" },
  { title: "The Body Keeps the Score Resources", url: "https://www.besselvanderkolk.com/resources" },
  { title: "ACEs - Adverse Childhood Experiences", url: "https://www.cdc.gov/violenceprevention/aces" },
  { title: "Positive Psychology - Free Resources", url: "https://positivepsychology.com/free-resources" },
  { title: "Moodgym - Online CBT Program", url: "https://moodgym.com.au" },
  { title: "Coursera - The Science of Well-Being", url: "https://www.coursera.org/learn/the-science-of-well-being" },
  { title: "FutureLearn - Understanding Mental Health", url: "https://www.futurelearn.com/subjects/psychology-and-mental-health-courses/mental-health" },
  { title: "OpenLearn - Free Mental Health Courses", url: "https://www.open.edu/openlearn/health-sports-psychology/mental-health" },
  { title: "MindEd - Mental Health Education", url: "https://www.minded.org.uk" },
  { title: "Black Dog Institute - Mental Health Research", url: "https://www.blackdoginstitute.org.au" },
  { title: "Heads Together - Mental Health Campaign", url: "https://www.headstogether.org.uk" },
  { title: "Time to Change - End Mental Health Stigma", url: "https://www.time-to-change.org.uk" },
  { title: "Co-occurring Disorders - SAMHSA", url: "https://www.samhsa.gov/co-occurring-disorders" },
  { title: "BetterHelp - Online Counselling", url: "https://www.betterhelp.com" },
  { title: "Talkspace - Online Therapy", url: "https://www.talkspace.com" },
  { title: "IAPT - NHS Talking Therapies", url: "https://www.nhs.uk/mental-health/talking-therapies-medicine-treatments/talking-therapies-and-counselling/nhs-talking-therapies" },
  { title: "Schizophrenia - Rethink Resources", url: "https://www.rethink.org/advice-and-information/about-mental-illness/learn-more-about-conditions/schizophrenia" },
  { title: "Depression - Mind Resources", url: "https://www.mind.org.uk/information-support/types-of-mental-health-problems/depression" },
  { title: "Happify - Science Based Happiness", url: "https://www.happify.com" },
  { title: "Elefriends - Online Community", url: "https://www.mind.org.uk/information-support/support-community-elefriends" },
  { title: "BPS - Find a Psychologist", url: "https://www.bps.org.uk/public/find-psychologist" },
  { title: "Mood Disorders Society of Canada", url: "https://mdsc.ca" },
  { title: "CAMHS - Child and Adolescent Mental Health", url: "https://www.youngminds.org.uk/young-person/your-guide-to-support/guide-to-camhs" },
  { title: "Vipassana - Meditation and Mental Health", url: "https://www.dhamma.org" },
];

export default function Resources() {
  const [activeTab, setActiveTab] = useState(0);
  const [videoId, setVideoId] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white">
      <header className="flex justify-between items-center px-8 py-6">
        <a href="/" className="text-2xl font-bold tracking-tight">💙 Silent Safety</a>
        <a href="/emergency" className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-full text-sm font-semibold transition">🆘 Emergency</a>
      </header>

      <section className="text-center px-8 py-12">
        <h2 className="text-4xl font-bold mb-4">📚 Resources</h2>
        <p className="text-blue-200 text-lg max-w-xl mx-auto">200 free resources for recovery, meditation, mental health and supporting loved ones.</p>
      </section>

      <div className="flex flex-wrap justify-center gap-3 px-8 mb-10">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActiveTab(i)}
            className={`px-6 py-3 rounded-full font-semibold transition text-sm ${activeTab === i ? "bg-blue-500 text-white" : "bg-blue-800 hover:bg-blue-700 text-blue-200"}`}>
            {tab}
          </button>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-8 pb-16">
        {activeTab === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {meditation.map((item, i) => (
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 rounded-xl p-4 flex items-center gap-3 transition">
                <span className="text-2xl">🧘</span>
                <span className="text-sm font-medium">{item.title}</span>
              </a>
            ))}
          </div>
        )}

        {activeTab === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addiction.map((item, i) => (
              <button key={i} onClick={() => setVideoId(item.videoId)}
                className="bg-blue-800 hover:bg-blue-700 rounded-xl p-4 flex items-center gap-3 transition text-left w-full">
                <span className="text-2xl">▶️</span>
                <span className="text-sm font-medium">{item.title}</span>
              </button>
            ))}
          </div>
        )}

        {activeTab === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {family.map((item, i) => (
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 rounded-xl p-4 flex items-center gap-3 transition">
                <span className="text-2xl">👨‍👩‍👧</span>
                <span className="text-sm font-medium">{item.title}</span>
              </a>
            ))}
          </div>
        )}

        {activeTab === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mentalHealth.map((item, i) => (
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 rounded-xl p-4 flex items-center gap-3 transition">
                <span className="text-2xl">🧠</span>
                <span className="text-sm font-medium">{item.title}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {videoId && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-blue-900 rounded-2xl overflow-hidden w-full max-w-3xl">
            <div className="flex justify-between items-center px-6 py-4">
              <h3 className="font-bold text-lg">Now Playing</h3>
              <button onClick={() => setVideoId(null)} className="text-blue-200 hover:text-white text-2xl">✕</button>
            </div>
            <iframe width="100%" height="400"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen />
          </div>
        </div>
      )}

      <footer className="text-center text-blue-300 py-8 text-sm">
        <a href="/" className="hover:text-white transition">← Back to Silent Safety</a>
      </footer>
    </main>
  );
}