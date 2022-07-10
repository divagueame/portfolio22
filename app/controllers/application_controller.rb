class ApplicationController < ActionController::Base

    before_action :set_locale
    
    private
        def set_locale
            I18n.locale = extract_locale || I18n.default_locale
        end
        
        def extract_locale
            parsed_locale = params[:locale]
            I18n.available_locales.map(&:to_s).include?(parsed_locale) ? parsed_locale : nil
        end

    def default_url_options
      { locale: I18n.locale }
    end













#   around_action :switch_locale

#   def switch_locale(&action)
#     logger.debug "* Accept-Language: #{request.env['HTTP_ACCEPT_LANGUAGE']}"
#     locale = extract_locale_from_accept_language_header
#     logger.debug "* Locale set to '#{locale}'"
#     I18n.with_locale(locale, &action)
#   end

#   private

#   def extract_locale_from_accept_language_header
#     request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first
#   end
end
