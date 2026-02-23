"use client";
import { useState } from "react";

const tabs = ["Understanding", "How to Help", "Setting Boundaries", "Talk to Someone", "Resources"];

const understanding = [
  { icon: "🧠", title: "Addiction is a disease, not a choice", body: "Addiction changes the brain's structure and function. Your loved one is not weak or bad — they are unwell and they need support, not judgement." },
  { icon: "💔", title: "It affects the whole family", body: "Living with someone in addiction is exhausting, frightening and heartbreaking. Your feelings are all completely valid." },
  { icon: "🔄", title: "Recovery is not linear", body: "Relapse is common and does not mean failure. Recovery is a journey with ups and downs. Progress matters more than perfection." },
  { icon: "🌱", title: "Change is possible", body: "Millions of people recover from addiction every year. With the right support, your loved one can have a real chance at a full life." },
  { icon: "😔", title: "You did not cause this", body: "Addiction is not your fault. You did not cause it, you cannot control it, and you cannot cure it. But you can support recovery." },
  { icon: "💪", title: "Your wellbeing matters too", body: "You cannot pour from an empty cup. Taking care of yourself is not selfish — it is essential for you and for your loved one." },
];

const howToHelp = [
  { icon: "👂", title: "Listen without judgement", body: "Sometimes the most powerful thing you can do is simply listen. Do not try to fix or lecture. Just be present." },
  { icon: "📞", title: "Stay connected", body: "Isolation makes addiction worse. Keep the lines of communication open even when it is hard. A simple text can mean everything." },
  { icon: "🏥", title: "Encourage professional help", body: "Gently encourage your loved one to speak to a GP or addiction specialist. Offer to help them make the appointment or go with them." },
  { icon: "📖", title: "Learn about addiction", body: "The more you understand addiction, the better equipped you will be to help. Use the resources in this hub to educate yourself." },
  { icon: "🌟", title: "Celebrate every step", body: "Acknowledge and celebrate progress however small. One sober day is worth celebrating. Your encouragement is more powerful than you know." },
  { icon: "🤝", title: "Attend support groups", body: "Al-Anon, Nar-Anon and similar groups are for families and friends. Connecting with others who understand can be life changing." },
  { icon: "💊", title: "Know about naloxone", body: "If your loved one uses opioids, ask a pharmacist about naloxone — a free medication that reverses overdose. It could save their life." },
  { icon: "🎯", title: "Focus on behaviour not character", body: "Focus on specific behaviours and how they affect you, rather than attacking their character." },
];

const boundaries = [
  { icon: "🛡️", title: "Boundaries are not punishment", body: "Setting boundaries is an act of love. Boundaries protect your wellbeing and can motivate change." },
  { icon: "🚫", title: "Stop enabling", body: "Enabling means protecting someone from the consequences of their addiction. This includes giving money or making excuses for them." },
  { icon: "💬", title: "Be clear and consistent", body: "State your boundaries calmly and clearly. Follow through consistently — inconsistency undermines boundaries." },
  { icon: "🏠", title: "Protect your home", body: "It is reasonable to say that you will not allow alcohol or drugs in your home. Your home should be a safe space for you." },
  { icon: "💰", title: "Protect your finances", body: "Do not give money that could be used for substances. If you want to help financially, pay bills directly rather than giving cash." },
  { icon: "👶", title: "Protect your children", body: "Children must always come first. If your loved one's addiction is putting children at risk, seek help immediately." },
  { icon: "🧘", title: "Get support for yourself", body: "Setting and maintaining boundaries is hard. A therapist or support group can help you navigate this incredibly difficult journey." },
];

const helplines = [
  { icon: "📞", name: "Al-Anon UK", number: "0800 0086 811", desc: "Support for families of alcoholics", url: "https://al-anon.org.uk" },
  { icon: "📞", name: "Nar-Anon UK", number: "0300 999 1212", desc: "Support for families of addicts", url: "https://www.nar-anon.org.uk" },
  { icon: "📞", name: "Adfam", number: "020 3817 9410", desc: "National support for families", url: "https://adfam.org.uk" },
  { icon: "📞", name: "Frank", number: "0300 123 6600", desc: "Drug advice for families", url: "https://www.talktofrank.com" },
  { icon: "📞", name: "Samaritans", number: "116 123", desc: "Emotional support 24/7", url: "https://www.samaritans.org" },
  { icon: "📞", name: "Mind", number: "0300 123 3393", desc: "Mental health support", url: "https://www.mind.org.uk" },
  { icon: "📞", name: "Family Lives", number: "0808 800 2222", desc: "Family support helpline", url: "https://www.familylives.org.uk" },
  { icon: "📞", name: "NACOA", number: "0800 358 3456", desc: "For children of alcoholics", url: "https://nacoa.org.uk" },
];

const resources = [
  { icon: "📖", title: "Beyond Addiction — Book for Families", url: "https://beyondaddictionbook.com" },
  { icon: "📖", title: "Codependent No More — Melody Beattie", url: "https://www.hazeldenbettyford.org/products/codependent-no-more" },
  { icon: "🌐", title: "Al-Anon Family Groups", url: "https://al-anon.org.uk" },
  { icon: "🌐", title: "Adfam Families Living with Addiction", url: "https://adfam.org.uk" },
  { icon: "🌐", title: "CRAFT Community Reinforcement and Family Training", url: "https://www.addictionhelper.com/treatment/craft" },
  { icon: "🌐", title: "Partnership to End Addiction", url: "https://drugfree.org" },
  { icon: "🌐", title: "NACOA Children of Alcoholics", url: "https://nacoa.org.uk" },
  { icon: "🌐", title: "Families Anonymous", url: "https://www.familiesanonymous.org" },
  { icon: "🌐", title: "NHS Supporting Someone with Addiction", url: "https://www.nhs.uk/live-well/addiction-support/supporting-someone-with-an-addiction" },
  { icon: "🌐", title: "Mind How to Support Someone", url: "https://www.mind.org.uk/information-support/helping-someone-else" },
];

export default function FamilyHub() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-950 to-rose-900 text-white">
      <header className="flex justify-between items-center px-8 py-6">
        <a href="/" className="text-2xl font-bold tracking-tight">Silent Safety</a>
        <a href="/emergency" className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-full text-sm font-semibold transition">Emergency</a>
      </header>

      <section className="text-center px-8 py-12">
        <div className="text-6xl mb-4">👨‍👩‍👧</div>
        <h2 className="text-4xl font-bold mb-4">Family and Friends Hub</h2>
        <p className="text-rose-200 text-lg max-w-xl mx-auto">You are not alone. Supporting a loved one through addiction is one of the hardest things a person can do. This space is for you.</p>
      </section>

      <div className="flex flex-wrap justify-center gap-3 px-8 mb-10">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActiveTab(i)}
            className={`px-5 py-3 rounded-full font-semibold transition text-sm ${activeTab === i ? "bg-rose-500 text-white" : "bg-rose-800 hover:bg-rose-700 text-rose-200"}`}>
            {tab}
          </button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-8 pb-16">
        {activeTab === 0 && (
          <div className="grid gap-4 md:grid-cols-2">
            {understanding.map((item, i) => (
              <div key={i} className="bg-rose-800 rounded-2xl p-6">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-rose-200">{item.body}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === 1 && (
          <div className="grid gap-4 md:grid-cols-2">
            {howToHelp.map((item, i) => (
              <div key={i} className="bg-rose-800 rounded-2xl p-6">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-rose-200">{item.body}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === 2 && (
          <div className="grid gap-4 md:grid-cols-2">
            {boundaries.map((item, i) => (
              <div key={i} className="bg-rose-800 rounded-2xl p-6">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-rose-200">{item.body}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === 3 && (
          <div className="grid gap-4">
            {helplines.map((item, i) => (
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer"
                className="bg-rose-800 hover:bg-rose-700 rounded-2xl p-6 flex items-center gap-6 transition">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-rose-200">{item.number}</p>
                  <p className="text-rose-300 text-sm mt-1">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
        )}
        {activeTab === 4 && (
          <div className="grid gap-4 md:grid-cols-2">
            {resources.map((item, i) => (
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer"
                className="bg-rose-800 hover:bg-rose-700 rounded-2xl p-6 flex items-center gap-4 transition">
                <span className="text-3xl">{item.icon}</span>
                <span className="font-medium">{item.title}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      <footer className="text-center text-rose-300 py-8 text-sm">
        <a href="/" className="hover:text-white transition">Back to Silent Safety</a>
      </footer>
    </main>
  );
}