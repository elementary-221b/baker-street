module Jekyll
  class EnvVarGenerator < Generator
    def generate(site)
      # This pulls the secret from the build environment into Jekyll
      site.config['vt_api_key'] = ENV['VT_API_KEY']
    end
  end
end
