require 'test_helper'

class ReviewRequestsControllerTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers

  def setup
    sign_in users(:junior_user)
  end

  test "create should require title" do
    post api_review_requests_url, params: {}
    json_response = JSON.parse(response.body)

    assert_response(400)
    assert_equal 'You must supply a title.', json_response['error']
  end

  test "create should at least on file" do
    post api_review_requests_url, params: { title: 'Test Request' }
    json_response = JSON.parse(response.body)

    assert_response(400)
    assert_equal 'You must submit at least one file.', json_response['error']
  end

  test "create requires files to have a filename or a body" do
    post api_review_requests_url, params: { title: 'Test Request', files: [ { filename: '' } ] }
    json_response = JSON.parse(response.body)

    assert_response(400)
    assert_equal 'You must submit at least one file.', json_response['error']
  end

  test "create returns correctly" do
    post api_review_requests_url, params: {
      title: 'Test Request',
      files: [
        { filename: 'Say Hello', content: 'var x = 1;', language: 'javascript' }
      ]
    }
    json_response = JSON.parse(response.body)

    assert_response :success
    assert_equal 'Test Request', json_response['review-request']['title']
  end

  test "create creates source files correctly" do
    post api_review_requests_url, params: {
      title: 'Test Request',
      files: [
        { filename: 'Say Hello', content: 'var x = 1;', language: 'javascript' }
      ]
    }

    assert_response :success

    assert_equal 'Say Hello', SourceFile.last.filename
    assert_equal 'var x = 1;', SourceFile.last.content
    assert_equal 'javascript', SourceFile.last.language
    assert_equal ReviewRequest.last.id, SourceFile.last.review_request_id
  end
end
