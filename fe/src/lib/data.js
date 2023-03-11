import util from "@/lib/util";
import api from "@/lib/api";

class Data {
  //
  static async for(route, ...args) {
    const data = new Data();
    return await data.for(route, ...args);
  }

  async for(route, ...args) {
    const fetcher = this[route];
    if (!fetcher) throw new Error(`no fetcher for ${route}!`);
    return await fetcher(...args);
  }

  //
  async ["/home-page"]() {
    const result = await api.fetch("/home-page", {});

    if (!result.ok) throw new Error("gah... bad fetch!");

    const json = result.json;
    const raw = util.get(json, "data");

    const copy = util.get(raw, "attributes.copy");

    return { result, json, raw, copy };
  }

  //
  async ["/route-page"]() {
    const result = await api.fetch("/route-page", {});

    if (!result.ok) throw new Error("gah... bad fetch!");

    const json = result.json;
    const raw = util.get(json, "data");

    const copy = util.get(raw, "attributes.copy");

    return { result, json, raw, copy };
  }

  //
  async ["/team-page"]() {
    const result = await api.fetch("/team-page", {});

    if (!result.ok) throw new Error("gah... bad fetch!");

    const json = result.json;
    const raw = util.get(json, "data");

    const copy = util.get(raw, "attributes.copy");

    return { result, json, raw, copy };
  }

  //
  async ["/lets-go"]() {
    const result = await api.fetch("/let-s-go-page", {});

    if (!result.ok) throw new Error("gah... bad fetch!");

    const json = result.json;
    const raw = util.get(json, "data");

    const copy = util.get(raw, "attributes.copy");

    return { result, json, raw, copy };
  }

  //
  async ["/hero-template"]() {
    const result = await api.fetch("/hero-template", {
      populate: ["hero", "hero.image"],
    });

    if (!result.ok) throw new Error("gah... bad fetch!");

    const json = result.json;
    const raw = util.get(json, "data");

    const hero = {
      key: "attributes.hero.data.attributes.url",
    };
    hero.value = util.get(raw, hero.key);
    hero.url = api.img_url_for(hero.value);

    return { result, json, raw, hero };
  }

  //
  async ["/default-template"]() {
    const result = await api.fetch("/default-template", {
      populate: ["hero", "hero.image"],
    });

    if (!result.ok) throw new Error("gah... bad fetch!");

    const json = result.json;
    const raw = util.get(json, "data");

    const hero = {
      key: "attributes.hero.data.attributes.url",
    };
    hero.value = util.get(raw, hero.key);
    hero.url = api.img_url_for(hero.value);

    const rocks = [];
    for (let i = 0; i <= 17; i++) {
      const basename = `${i}.png`;
      const url = `/rocks/${basename}`;
      const alt = url;
      const caption = url;
      const width = 300;
      rocks.push({ url, alt, caption, width });
    }

    return { result, json, raw, hero, rocks };
  }
}

const data = new Data();
export { data as default, Data };
