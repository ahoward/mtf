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
  async ["/pages"](path, options = {}) {
    const query = {
      populate: ["image"],
      filters: { path: { $eq: path } },
    };

    const result = await api.fetch("/pages", { query });

    if (!result.ok) throw new Error("gah... bad fetch!");

    const json = result.json;

    const raw = util.get(json, "data");

    const page = util.get(raw, "0");

    //
    const title = util.get(page, "attributes.title");
    page.title = title;

    //
    const description = util.get(page, "attributes.description");
    page.description = description;

    //
    const copy = util.get(page, "attributes.copy");
    page.copy = copy;

    //
    const image_data = util.get(page, "attributes.image.data");
    if (image_data) {
      const image_url = util.get(image_data, "attributes.url");
      const image = api.url_for(image_url);
      page.image = image;
    } else {
      page.image = null;
    }

    return {
      result,
      json,
      raw,
      page,
    };
  }
}

const data = new Data();
export { data as default, Data };
