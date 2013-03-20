class UserMailer < ActionMailer::Base
  default from: "adam@flockhq.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.sign_up.subject
  #
  def sign_up(user)
    @user = user
    @url = "http://example.com/login"

    mail(:to => user.email, :subject => "Thanks for signing up!")
  end
end
