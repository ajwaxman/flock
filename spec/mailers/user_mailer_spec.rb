require "spec_helper"

describe UserMailer do
  describe "sign_up" do
    let(:mail) { UserMailer.sign_up }

    it "renders the headers" do
      mail.subject.should eq("Sign up")
      mail.to.should eq(["to@example.org"])
      mail.from.should eq(["from@example.com"])
    end

    it "renders the body" do
      mail.body.encoded.should match("Hi")
    end
  end

end
