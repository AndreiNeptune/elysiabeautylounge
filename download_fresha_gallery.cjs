const axios = require('axios');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const urls = [
  "https://images.fresha.com/partner-portfolios/providers/2655167/0871120f-bec2-45e9-9385-fc78ca623131.jpeg?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=+8yqVDSEuBgIsqc3W3pFVHJdWCQ&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/9f8ad515-524d-475a-a2e1-9ef6cb924eb5.jpeg?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=WOTul5EBOHj5+UEVxMeb35x+9Y8&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/a10be3ce-3db8-4c72-ba07-bed9a27f74ac.jpeg?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=QLpIspyUdejWiJjEPXr9jKDyUJI&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/19ae930b-0784-44bc-9464-0331b88c846e.png?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=QdOG+DNJfpk27e1PGhqYYUDp40A&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/f44666b9-547d-4dae-b0b9-af7f0fe06ee6.jpeg?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=JtBXjmKmGfCnm9ltmEhK/hxHq/o&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/ffde8864-ca54-45ab-b12b-50fdd7d8c4e1.jpeg?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=qYwVc6AK979OEb2y1SwofLFDi1Y&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/09c33739-ade5-410f-9db4-4daaecae9eea.jpeg?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=F8KRVlmdftreW0Kqib86nMXRSEw&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/c852d55d-9954-4d49-8f7b-7c630949ccd0.jpeg?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=WG7M44l56in3kvtNEf8wka3mcmA&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/f937872d-fbe4-49b3-b4c3-8298bd659583.jpeg?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=VCH3PvLKtQONytPr+gjybmsSGeM&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/8a44a3c8-e49c-4979-82ac-e1fb7e04b542.jpeg?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=sQNwIN7O7+Nppmokjanz5yJdvuQ&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/6df05e49-bb91-4add-b143-6ef41a0ffb65.jpeg?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=0PryZqDwVkRZ0T5s6OI7oM3h7kI&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/88da4077-4b66-4a92-80f1-b0598b708823.jpeg?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=CMk/eOcdAbM2SAZXRP7X/uOq86M&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/8eaaf57d-d61e-40c4-80f0-35bae31e3ba2.jpeg?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=m/GwO2AxoIcr2PmF2672mMHdfa0&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/7238b1c4-8403-4ce6-a661-4fb007ca4c88.jpeg?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=XoRrFF/HMTuXEEvNama5aCQkqrM&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/f0bfe0ec-935f-4c0f-8720-17cf04cea658.jpeg?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=ffNACzeeJc5CMLfxGc6UhOo3HJI&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/b33a0e12-a55a-4b4a-9b04-85e174abfa1e.jpeg?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=C5WkyQ+5h3SgISsxZF95m+mtWsY&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/d1cc501e-2b31-4a8f-9824-474db848782f.jpeg?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=E6HL7H1L3yAhncRJ8iEbKjAP8kw&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/9f7741d7-1388-45f9-9479-0715c325833d.jpeg?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=ZBAKYGemEgxivqbckA3LlZKCmFQ&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/f2786783-8335-4c58-a1bd-2d857a2e9d6e.jpeg?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=dtvdin1UmjGUn7WWhWo24dzsd1w&f_width=3840",
  "https://images.fresha.com/partner-portfolios/providers/2655167/f3f56d1f-e66d-4865-884f-36abbac22da1.png?class=width-xlarge&dpr=1&keyId=Zhvs3FWlN6IKrXGU&signature=CMYl5/110fmDEA7iuDg7wDWuetA&f_width=3840"
];

const seoNames = [
  "manichiura-semipermanenta-elysia-beauty-lounge-1",
  "unghii-gel-bucuresti-unirii-2",
  "manichiura-apex-salon-elysia-3",
  "constructie-gel-unghii-bucuresti-4",
  "pedichiura-semipermanenta-elysia-5",
  "intretinere-unghii-gel-unirii-6",
  "manichiura-frezata-elysia-beauty-7",
  "design-unghii-gel-bucuresti-8",
  "unghii-acril-salon-elysia-9",
  "nail-art-manichiura-unirii-10",
  "manichiura-clasica-elysia-beauty-11",
  "pedichiura-spa-bucuresti-12",
  "aplicare-oja-semipermanenta-elysia-13",
  "unghii-french-gel-unirii-14",
  "manichiura-mireasa-elysia-beauty-15",
  "unghii-migdala-gel-bucuresti-16",
  "constructie-polygel-elysia-17",
  "manichiura-babyboomer-unirii-18",
  "decor-unghii-salon-elysia-19",
  "pedichiura-medicala-bucuresti-20"
];

const destDir = path.join(__dirname, 'public', 'images', 'gallery');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

async function downloadAndConvert() {
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const name = seoNames[i];
    const destPath = path.join(destDir, `${name}.webp`);

    try {
      const response = await axios({
        url,
        responseType: 'arraybuffer'
      });
      
      await sharp(response.data)
        .webp({ quality: 80 })
        .toFile(destPath);
        
      console.log(`Saved: ${name}.webp`);
    } catch (err) {
      console.error(`Error processing ${url}:`, err.message);
    }
  }
  console.log("Done.");
}

downloadAndConvert();
