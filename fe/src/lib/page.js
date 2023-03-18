import Data from "@/lib/data";
import Util from "@/lib/util";
import Markdown from "@/components/markdown";
import HeroTemplate from "@/components/templates/hero";
import DefaultTemplate from "@/components/templates/default";

class Page {
  constructor(path, options = {}) {
    this.path = Util.strip(path);
    this.options = options;

    this.active = options.active || this.path;
    this.template = options.template || "default";

    if (typeof this.template == "string") {
      this.template = String(this.template).trim().toLowerCase();

      switch (this.template) {
        case "hero":
          this.template = HeroTemplate;
          break;
        case "default":
          this.template = DefaultTemplate;
          break;
        default:
          this.template = DefaultTemplate;
          break;
      }
    }
  }

  async render() {
    const result = await this.fetcher();

    const page = Util.get(result, "page");
    const copy = Util.get(page, "copy");

    return (
      <>
        <this.template active={this.active}>
          <Markdown copy={copy} />
        </this.template>
      </>
    );
  }

  async metadata() {
    const result = await this.fetcher();

    const page = Util.get(result, "page");
    const title = Util.get(page, "title");
    const description = Util.get(page, "description");
    const image = Util.get(page, "image");

    const openGraph = {};

    const robots = { index: true };

    const metadata = { openGraph, robots };

    if (title) {
      metadata.title = title;
      openGraph.title = title;
    }

    if (description) {
      openGraph.description = description;
    }

    if (image) {
      openGraph.image = image;
    }

    Util.log("debug", { metadata });

    return metadata;
  }

  async fetcher() {
    const result = await Data.for("/pages", this.path);
    return result;
  }

  static for(path, options = {}) {
    const page = new Page(path, options);

    const component = async function () {
      return page.render();
    };

    return component;
  }

  static async metadata(path, options = {}) {
    const page = new Page(path, options);

    return await page.metadata();
  }
}

export default Page;
